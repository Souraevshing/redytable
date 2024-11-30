import { Card } from "@/components/ui/card";

const menuItems = [
  {
    name: "Margherita Pizza",
    price: "$12",
    description: "Classic tomato and mozzarella",
  },
  {
    name: "Pepperoni Pizza",
    price: "$14",
    description: "Spicy pepperoni with cheese",
  },
  {
    name: "Vegetarian Pasta",
    price: "$10",
    description: "Mixed vegetables in tomato sauce",
  },
  {
    name: "Chicken Alfredo",
    price: "$15",
    description: "Creamy pasta with grilled chicken",
  },
];

export function MenuTab() {
  return (
    <div className="space-y-4">
      {menuItems.map((item, index) => (
        <Card key={index} className="p-4">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-bold text-lg">{item.name}</h3>
              <p className="text-gray-500">{item.description}</p>
            </div>
            <span className="font-semibold">{item.price}</span>
          </div>
        </Card>
      ))}
    </div>
  );
}
