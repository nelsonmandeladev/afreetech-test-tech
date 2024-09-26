"use client"

import { MoreHorizontal } from "lucide-react"

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
    Button,
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components"
import { Agence } from "@/types";
import { format } from "date-fns"
import { fr } from "date-fns/locale"
import Link from "next/link";

interface AgenciesListProps {
    agencies: Agence[]
}
export function AgenciesList(props: AgenciesListProps) {
    const { agencies } = props;
    return (
        <Card>
            <CardHeader className="w-full flex justify-between">
                <div className="w-full flex justify-between">
                    <div className="">
                        <CardTitle>Mes agences</CardTitle>
                        <CardDescription>
                            Voilci la liste des agences de ENTIA
                        </CardDescription>
                    </div>
                    <Button>
                        Ajouter une agence
                    </Button>
                </div>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Nom</TableHead>
                            <TableHead className="hidden md:table-cell">Clients total</TableHead>
                            <TableHead className="hidden md:table-cell">
                                {"Nombres d'assurances"}
                            </TableHead>
                            <TableHead className="hidden md:table-cell">
                                {"Crée le"}
                            </TableHead>
                            <TableHead className="hidden md:table-cell">
                                {"Modifié le"}
                            </TableHead>
                            <TableHead>
                                <span className="sr-only">Actions</span>
                            </TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {agencies.map(agency => (
                            <TableRow key={agency.id}>
                                <TableCell className="font-medium">
                                    {agency.nom}
                                </TableCell>
                                <TableCell className="hidden md:table-cell">{agency.clients?.length}</TableCell>
                                <TableCell className="hidden md:table-cell">{agency.assurances?.length}</TableCell>
                                <TableCell className="hidden md:table-cell">
                                    {format(agency.createdAt, "PPP", { locale: fr })}
                                </TableCell>
                                <TableCell className="hidden md:table-cell">
                                    {format(agency.updatedAt, "PPP", { locale: fr })}
                                </TableCell>
                                <TableCell>
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button aria-haspopup="true" size="icon" variant="ghost">
                                                <MoreHorizontal className="h-4 w-4" />
                                                <span className="sr-only">Toggle menu</span>
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent align="end">
                                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                            <DropdownMenuItem>Modifier</DropdownMenuItem>
                                            <DropdownMenuItem>
                                                <Link
                                                    href={`/app/agencies/${agency.id}`}
                                                >
                                                    Details
                                                </Link>
                                            </DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    )
}
