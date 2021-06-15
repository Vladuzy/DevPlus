import { AuthProvider } from "./AuthProvider";
import { ActivitiesProvider } from "./Activities";
import { GoalsProvider } from "./Goals";
import { HabitsProviders } from "./Habits";
import { GroupsProviders } from "./Groups";

const Providers = ({ children }) => {
    return (
      <AuthProvider>
        <HabitsProviders>
          <GroupsProviders>
            <GoalsProvider>
              <ActivitiesProvider>
                {children}
              </ActivitiesProvider>
            </GoalsProvider>
          </GroupsProviders>
        </HabitsProviders>
      </AuthProvider>
    );
};

export default Providers;
