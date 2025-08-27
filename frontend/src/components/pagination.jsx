import {
	Pagination,
	PaginationContent,
	PaginationEllipsis,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from "@/components/ui/pagination";
import { ChevronLeft, ChevronRight } from "lucide-react";

const PaginationComp = ({ page, setCurrPage }) => {
	return (
		<Pagination className="gap-2">
			<PaginationContent>
				<PaginationItem onClick={() => setCurrPage(page - 1)}>
					<PaginationPrevious className="p-2 border-1 border-gray-200">
						<ChevronLeft />
					</PaginationPrevious>
				</PaginationItem>
				<PaginationItem>
					<PaginationLink> Page {page}</PaginationLink>
				</PaginationItem>
				<PaginationItem onClick={() => setCurrPage(page + 1)}>
					<PaginationPrevious className="p-2 border-1 border-gray-200">
						<ChevronRight />
					</PaginationPrevious>
				</PaginationItem>
			</PaginationContent>
		</Pagination>
	);
};

export default PaginationComp;
