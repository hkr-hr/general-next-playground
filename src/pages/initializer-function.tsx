import { StateTestComponent } from "@/components/StateTestComponent";

const PageInitializerFunction = () => {
  console.log("render initializer function page");
  return (
    <div>
      <StateTestComponent />
    </div>
  );
};

export default PageInitializerFunction;
