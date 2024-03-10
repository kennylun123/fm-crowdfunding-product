import Pledge from "@/app/ui/Pledge";
import { AboutProjectProps } from "@/app/lib/definitions";

const AboutProject = ({
  contents,
  pledges,
  toggleDialogById,
}: AboutProjectProps) => {
  return (
    <div className="card-container space-y-6 items-start text-left">
      <h2 className="text-lg lg:text-xl font-bold">About this project</h2>
      {contents.map((item, index) => (
        <p key={index}>{item}</p>
      ))}

      {pledges.map((item) => (
        <Pledge
          id={item.id}
          key={item.title}
          title={item.title}
          content={item.content}
          price={item.price}
          qty={item.qty}
          toggleDialogById={toggleDialogById}
        />
      ))}
    </div>
  );
};

export default AboutProject;
