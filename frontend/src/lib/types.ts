export interface UserFilters {
	search: string;
	are_superusers?: "superuser" | "normaluser" | "na";
	are_verified?: "verified" | "notverified" | "na";
}
