import Image from "next/image";
import Link from "next/link";
import Card from "./_components/Card";
export default function Home() {
  return (
    <div>
      <div className="tw-max-w-7xl tw-m-auto tw-p-2">
        <div className="tw-flex tw-gap-3">
          <Card title="Autocomplete" page="/autocomplete" />          
          <Card title="Tab Navigation" page="/tabnavigation"/>          
          <Card title="Star Rating" page="/starrating"/>          
        </div>
      </div>
    </div>
  );
}
