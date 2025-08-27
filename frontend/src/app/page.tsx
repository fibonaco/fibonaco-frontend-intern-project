/**
 * Main Page for the Frontend Intern Project
 */
"use client";
import FilterComponent from "@/components/search-component";
import ThemeToggle from "@/components/theme-toggle";
import PaginationComp from "@/components/pagination";
import UserTable from "@/components/users-table";
import usePagesAPIQuery from "@/hooks/use-user-pages";
import { useState } from "react";
import { ShieldUser } from "lucide-react";

function UsersTable() {
	const [currPage, setCurrPage] = useState(1);
	const [limit, setLimit] = useState(10);

	const [filters, setFilters] = useState({
		search: "",
		are_superusers: "na", // "na" means "All" - no filter applied
		are_verified: "na", // "na" means "All" - no filter applied
	});

	const { data, error, isPending } = usePagesAPIQuery({
		limit: limit,
		page: currPage,
		filters: filters,
	});
	console.log("User data", data);

	return (
		<section className="max-w-screen-xl mx-auto my-12">
			<div className="flex justify-between gap-4 items-center">
				<div className="flex  items-center gap-2">
					<p className="p-4 rounded-full bg-accent">
						<ShieldUser className="sha w-8 h-8" />
					</p>
					<p>
						<h1 className="text-4xl font-bold">User Management</h1>
						<h3 className="text-gray-400">
							Manage you team member and their permission
						</h3>
					</p>
				</div>
				<ThemeToggle />
			</div>

			{/* Handle loading state */}
			{isPending && (
				<div className="flex justify-center items-center py-12">
					<div>Loading users...</div>
				</div>
			)}

			{/* Handle error state */}
			{error && (
				<div className="flex justify-center items-center py-12">
					<div className="text-red-500">
						Error loading users: {error.message}
					</div>
				</div>
			)}

			<FilterComponent filters={filters} setFilters={setFilters} />

			{data && <UserTable users={data?.data} />}

			<PaginationComp page={currPage} setCurrPage={setCurrPage} />
		</section>
	);
}

export default UsersTable;
