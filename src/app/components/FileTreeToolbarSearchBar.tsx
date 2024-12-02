import { Input } from "@/components/ui/input";
import useFileStore from "@/lib/store/files";
import useSearchStore from "@/lib/store/search";

export default function FileTreeToolbarSearchBar() {
  const { files } = useFileStore();
  const { setSearch } = useSearchStore();

  function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value);
  }

  return (
    <Input
      placeholder="Search"
      disabled={files.length === 0}
      className="h-10"
      onChange={handleSearch}
    />
  );
}
