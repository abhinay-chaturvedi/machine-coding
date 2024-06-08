import Image from "next/image";
import Link from "next/link";
import Card from "./_components/Card";
export default function Home() {
  return (
    <div>
      <div className="tw-max-w-7xl tw-m-auto tw-p-2">
        <h1 className="tw-text-center tw-font-bold tw-text-3xl tw-my-3">Machine Coding Question</h1>
        <div className="tw-flex tw-gap-3 tw-flex-wrap tw-justify-center">
          <Card title="Autocomplete" page="/autocomplete" />          
          <Card title="Tab Navigation" page="/tabnavigation"/>          
          <Card title="Star Rating" page="/starrating"/>          
          <Card title="Pop Over" page="/popover"/>          
          <Card title="Accordian" page="/accordian"/>          
          <Card title="Carousel" page="/carousel"/>          
          <Card title="Infinte Scroll" page="/infinite-scroll"/>          
          <Card title="Debounce" page="/debounce"/>          
          <Card title="Tic Tac Toe" page="/tic-tac-toe"/>          
          <Card title="Date Picker" page="/date-picker"/>          
          <Card title="Analog Clock" page="/analog-clock"/>          
          <Card title="Custom Promises" page="/custom-promises"/>          
          <Card title="Nested Comments" page="/nested-comments"/>          
          <Card title="Build Calculator" page="/calculator"/>          
          <Card title="Giphy Images" page="/giphy-images"/>          
          <Card title="Nested CheckBoxe" page="/nested-checkbox"/>          
          <Card title="Poll Widget" page="/poll-widget"/>          
          <Card title="Event Emitter" page="/event-emitter"/>          
          <Card title="Promise.All" page="/promise-all"/>          
          <Card title="Flatten Array" page="/flatten-array"/>          
          <Card title="Connect Four" page="/connect-four"/>          
          <Card title="Snake Game" page="/snake-game"/>          
        </div>
      </div>
    </div>
  );
}
