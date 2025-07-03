
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

interface ResultsTableProps {
  data: any[];
}

export const ResultsTable = ({ data }: ResultsTableProps) => {
  if (data.length === 0) return null;

  const headers = Object.keys(data[0]);

  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 shadow-2xl overflow-hidden">
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="border-white/20 hover:bg-white/5">
              {headers.map((header) => (
                <TableHead key={header} className="text-purple-300 font-semibold text-base">
                  {header.charAt(0).toUpperCase() + header.slice(1)}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((row, index) => (
              <TableRow key={index} className="border-white/10 hover:bg-white/5 transition-colors duration-200">
                {headers.map((header) => (
                  <TableCell key={header} className="text-white/90">
                    {row[header]}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};
