import Pledge from "@/app/ui/Pledge";
import { pledgeProps } from "@/app/ui/Pledge";

type aboutProjectProps = {
  contents: string[];
  pledges: pledgeProps[];
};

const AboutProject = ({ contents, pledges }: aboutProjectProps) => {
  return (
    <div className="card-container space-y-6 items-start text-left">
      <h2 className="text-lg font-bold">About this project</h2>
      {contents.map((item, index) => (
        <p key={index}>{item}</p>
      ))}

      {pledges.map((item) => (
        <Pledge
          key={item.title}
          title={item.title}
          content={item.content}
          price={item.price}
          qty={item.qty}
        />
      ))}
    </div>
  );
};

export default AboutProject;
