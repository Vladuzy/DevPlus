import { AuthProvider } from "./AuthProvider";
import { ActiviesProvider } from "./Activities";
import { GoalsProvider } from "./Goals";
import { HabitsProviders } from "./Habits";
import { GroupsProviders } from "./Groups";

const Providers = ({ children }) => {
    return (
      <AuthProvider>
        <HabitsProviders>
          <GroupsProviders>
            <GoalsProvider>
              <ActiviesProvider>
                {children}
              </ActiviesProvider>
            </GoalsProvider>
          </GroupsProviders>
        </HabitsProviders>
      </AuthProvider>
    );
};

export default Providers;
