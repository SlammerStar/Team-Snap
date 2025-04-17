import { AlertCircle, CheckCircle, Loader2 } from "lucide-react"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

interface TransactionStatusProps {
  status: "idle" | "pending" | "success" | "error"
  txHash?: string
}

export function TransactionStatus({ status, txHash }: TransactionStatusProps) {
  if (status === "idle") {
    return null
  }

  if (status === "pending") {
    return (
      <Alert>
        <Loader2 className="h-4 w-4 animate-spin text-amber-500" />
        <AlertTitle>Transaction in Progress</AlertTitle>
        <AlertDescription>
          Your transaction is being processed on the blockchain. This may take a few moments.
          {txHash && (
            <div className="mt-2">
              <a
                href={`https://mumbai.polygonscan.com/tx/${txHash}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline underline-offset-4"
              >
                View on Explorer
              </a>
            </div>
          )}
        </AlertDescription>
      </Alert>
    )
  }

  if (status === "success") {
    return (
      <Alert>
        <CheckCircle className="h-4 w-4 text-green-500" />
        <AlertTitle>Transaction Successful</AlertTitle>
        <AlertDescription>
          Your challenge has been successfully deployed to the blockchain.
          {txHash && (
            <div className="mt-2">
              <a
                href={`https://mumbai.polygonscan.com/tx/${txHash}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline underline-offset-4"
              >
                View on Explorer
              </a>
            </div>
          )}
        </AlertDescription>
      </Alert>
    )
  }

  if (status === "error") {
    return (
      <Alert>
        <AlertCircle className="h-4 w-4 text-red-500" />
        <AlertTitle>Transaction Failed</AlertTitle>
        <AlertDescription>
          There was an error processing your transaction. Please try again.
          {txHash && (
            <div className="mt-2">
              <a
                href={`https://mumbai.polygonscan.com/tx/${txHash}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline underline-offset-4"
              >
                View on Explorer
              </a>
            </div>
          )}
        </AlertDescription>
      </Alert>
    )
  }

  return null
}
