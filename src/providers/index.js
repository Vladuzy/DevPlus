import { AuthProvider } from "./AuthProvider";
import { ActiviesProvider } from "./Activities";
import { GoalsProvider } from "./Goals";
import { HabitsProviders } from "./Habits";
import { GroupsProviders } from "./Groups";

const Providers = ({ children }) => {
  return (
    <AuthProvider>
      <ActiviesProvider>
        <GoalsProvider>
          <GroupsProviders>
            <HabitsProviders>{children}</HabitsProviders>
          </GroupsProviders>
        </GoalsProvider>
      </ActiviesProvider>
    </AuthProvider>
  );
};

export default Providers;
