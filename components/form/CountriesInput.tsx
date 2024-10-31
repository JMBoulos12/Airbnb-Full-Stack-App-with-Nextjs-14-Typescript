import { Label } from "@/components/ui/label";
import { formatCountries } from "@/utils/countries";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Flag from "react-world-flags";

const name = "country";

function CountriesInput({ defaultValue }: { defaultValue?: string }) {
  return (
    <div className="mb-2">
      <Label htmlFor={name} className="capitalize">
        country
      </Label>

      <Select
        defaultValue={defaultValue || formatCountries[0].code}
        name={name}
        required
      >
        <SelectTrigger id={name}>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {formatCountries.map((item) => {
            return (
              <SelectItem key={item.code} value={item.code}>
                <span className="flex items-center gap-2">
                  <Flag code={item.code} style={{ width: 20, height: 20 }} />{" "}
                  {item.name}
                </span>
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>
    </div>
  );
}
export default CountriesInput;
