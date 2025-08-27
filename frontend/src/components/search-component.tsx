import React from "react";
import { Input } from "@/components/ui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { UserFilters } from "@/lib/types";

const FilterComponent = ({
	filters,
	setFilters,
}: {
	filters: UserFilters;
	setFilters: (prev: any) => void;
}) => {
	console.log(filters);

	function handleFilterChange(name: string, value: string) {
		setFilters((prev: UserFilters) => {
			return { ...prev, [name]: value };
		});
	}

	function clearFilters() {
		setFilters((prev: UserFilters) => ({
			...prev,
			search: "",
			are_superusers: "na",
			are_verified: "na",
		}));
	}

	return (
		<section className="flex my-4 gap-2">
			<Input
				placeholder="Search by Name or Email"
				value={filters.search}
				onChange={(e) => handleFilterChange("search", e.target.value)}
			/>

			<Select
				name="are_superusers"
				onValueChange={(value) =>
					handleFilterChange("are_superusers", value)
				}
				value={filters.are_superusers}>
				<SelectTrigger className="">
					<SelectValue placeholder="All" />
				</SelectTrigger>
				<SelectContent>
					<SelectItem value="na">All</SelectItem>
					<SelectItem value="superuser">Super Users</SelectItem>
					<SelectItem value="normaluser">Normal User</SelectItem>
				</SelectContent>
			</Select>

			<Select
				name="are_verified"
				onValueChange={(value) =>
					handleFilterChange("are_verified", value)
				}
				value={filters.are_verified}>
				<SelectTrigger className="">
					<SelectValue placeholder="All" />
				</SelectTrigger>
				<SelectContent>
					<SelectItem value="na">All</SelectItem>
					<SelectItem value="verified">Verified</SelectItem>
					<SelectItem value="notverified">Not Verified</SelectItem>
				</SelectContent>
			</Select>

			{(filters.are_superusers !== "na" ||
				filters.are_verified !== "na" ||
				filters.search !== "") && (
				<Button
					className="bg-red-400 hover:bg-red-400 hover:cursor-pointer"
					onClick={clearFilters}>
					<X className="text-white" />
				</Button>
			)}
		</section>
	);
};
export default FilterComponent;
