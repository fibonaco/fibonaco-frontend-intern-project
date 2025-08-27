import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { UserRow } from "@/hooks/use-user-pages";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@radix-ui/react-popover";

import {
	CircleCheckBig,
	CircleDashed,
	EllipsisVerticalIcon,
	ShieldCheck,
	ShieldCheckIcon,
	ShieldOffIcon,
	Trash2,
	User2,
} from "lucide-react";
import { Card } from "./ui/card";

const UserTable = ({ users }: { users: UserRow[] }) => {
	return (
		<Table className="border rounded-md my-5">
			<TableHeader className="">
				<TableRow>
					<TableHead>NAME</TableHead>
					<TableHead>EMAIL</TableHead>
					<TableHead>ROLE</TableHead>
					<TableHead>STATUS</TableHead>
				</TableRow>
			</TableHeader>

			<TableBody>
				{users?.map(
					({ email, id, is_superuser, is_verified, name }) => (
						<TableRow key={id} className="h-12">
							<TableCell className="font-medium ">
								<span className="p-2 mr-2 bg-blue-600 rounded-full">
									{name
										.split(" ")
										.map((n) => n[0].toUpperCase())
										.join("")
										.slice(0, 2)}
								</span>
								{name}
							</TableCell>
							<TableCell>{email}</TableCell>
							<TableCell
								className={
									!is_superuser
										? "text-purple-600"
										: "text-blue-600"
								}>
								<span className="flex gap-1 items-center">
									{!is_superuser ? (
										<User2 className="h-4 w-4" />
									) : (
										<ShieldCheck className="h-4 w-4" />
									)}
									{is_superuser
										? "Super User"
										: "Normal User"}
								</span>
							</TableCell>
							<TableCell
								className={
									is_verified
										? "text-green-500"
										: "text-red-500 "
								}>
								<span className="flex gap-1 items-center">
									{is_verified ? (
										<CircleCheckBig className="h-4 w-4" />
									) : (
										<CircleDashed className="h-4 w-4" />
									)}
									{is_verified ? "Verified" : "Not Verified"}
								</span>
							</TableCell>
							<TableCell className="text-right">
								{/* To be done */}
								<MenuItem />
							</TableCell>
						</TableRow>
					)
				)}
			</TableBody>
		</Table>
	);
};

export default UserTable;

function MenuItem() {
	return (
		<Popover>
			<PopoverTrigger>
				<EllipsisVerticalIcon className="w-4 h-4" />
			</PopoverTrigger>
			<PopoverContent>
				<Card className="p-4 rounded-sm">
					<li className="flex items-center list-none gap-1 hover:cursor-pointer ">
						<ShieldCheckIcon className="w-4 h-4" /> Verify User
					</li>
					<li className="flex items-center gap-1 list-none hover:cursor-pointer">
						<ShieldOffIcon className="w-4 h-4" /> Remove Admin
					</li>
					<li className="text-red-400 flex items-center list-none gap-1 hover:cursor-pointer">
						<Trash2 className="w-4 h-4" /> Delete user
					</li>
				</Card>
			</PopoverContent>
		</Popover>
	);
}
