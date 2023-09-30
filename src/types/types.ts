interface AppState {
  weeklyTotal: number
  weeklyBudget: {
    id: string
    amount: number
  }
  transactions: {
    id: string
    date: string
    amount: number
    description: string
  }[]
}

interface Transaction {
  id: string
  date: string
  originalDate: string
  description: string
  originalDescription: string
  amount: number
  accountName: string
}

export type { AppState, Transaction }
