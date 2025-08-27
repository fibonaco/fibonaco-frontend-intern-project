export interface UserFilters {
	search: string;
	are_superusers?: "superuser" | "normaluser" | "na" | string;
	are_verified?: "verified" | "notverified" | "na" | string;
}
