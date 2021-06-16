import { AuthProvider } from "./AuthProvider";
import { ActivitiesProvider } from "./Activities";
import { GoalsProvider } from "./Goals";
import { HabitsProviders } from "./Habits";
import { GroupsProviders } from "./Groups";
import { ViewportProvider } from "./GetViewport";

const Providers = ({ children }) => {
    return (
      <AuthProvider>
        <HabitsProviders>
          <GroupsProviders>
            <GoalsProvider>
              <ActivitiesProvider>
                <ViewportProvider>
                  {children}
                </ViewportProvider>
              </ActivitiesProvider>
            </GoalsProvider>
          </GroupsProviders>
        </HabitsProviders>
      </AuthProvider>
    );
};

export default Providers;
