import { accountData } from "../../data/data";
import AccountCard from "../../components/AccountCard/AccountCard";
import "./Profile.css";
import FormEditName from "../../components/FormEditName/FormEditName";

export default function Profile() {
  return (
    <main className="main bg-dark">
      <FormEditName />
      <h2 className="sr-only">Accounts</h2>
      {accountData.map(({ id, title, amount, description }) => {
        return (
          <AccountCard
            key={id}
            title={title}
            amount={amount}
            description={description}
          />
        );
      })}
    </main>
  );
}
