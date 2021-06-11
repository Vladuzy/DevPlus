import { AuthProvider } from './AuthProvider'
import {GoalsProvider} from "./Goals"

const Providers = ({ children }) => {
  return(
    <AuthProvider>
      <GoalsProvider>
         {children}
      </GoalsProvider>
    </AuthProvider>
  )
}

export default Providers