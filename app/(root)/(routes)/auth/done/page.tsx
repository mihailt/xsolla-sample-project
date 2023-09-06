import AuthDone from "@/components/app/ui/auth/done";
import { AuthDoneParams } from "@/components/app/ui/auth/done";

export default function AuthDonePage({
  searchParams,
}: {
  searchParams: AuthDoneParams
}) {
  return (
    <div>
        <AuthDone searchParams={searchParams} redirectRoute={"/"} />
    </div>  
  );
}