import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/new-york/ui/avatar"

export function RecentSales() {
  return (
    <div className="space-y-8">
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/01.png" alt="Avatar" />
          <AvatarFallback>RK</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Rahul Kumar</p>
          <p className="text-sm text-muted-foreground">
            rahul.kumar@email.com
          </p>
        </div>
        <div className="ml-auto font-medium">+₹1,99,900.00</div>
      </div>
      <div className="flex items-center">
        <Avatar className="flex h-9 w-9 items-center justify-center space-y-0 border">
          <AvatarImage src="/avatars/02.png" alt="Avatar" />
          <AvatarFallback>PS</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Priya Sharma</p>
          <p className="text-sm text-muted-foreground">priya.sharma@email.com</p>
        </div>
        <div className="ml-auto font-medium">+₹3,900.00</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/03.png" alt="Avatar" />
          <AvatarFallback>AP</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Amit Patel</p>
          <p className="text-sm text-muted-foreground">
            amit.patel@email.com
          </p>
        </div>
        <div className="ml-auto font-medium">+₹29,900.00</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/04.png" alt="Avatar" />
          <AvatarFallback>NG</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Neha Gupta</p>
          <p className="text-sm text-muted-foreground">neha.gupta@email.com</p>
        </div>
        <div className="ml-auto font-medium">+₹9,900.00</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/05.png" alt="Avatar" />
          <AvatarFallback>RS</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Rajesh Singh</p>
          <p className="text-sm text-muted-foreground">rajesh.singh@email.com</p>
        </div>
        <div className="ml-auto font-medium">+₹3,900.00</div>
      </div>
    </div>
  )
}
