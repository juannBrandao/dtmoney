import { useState } from "react";
import { TransactionsProvider } from "./hooks/useTransactions";
import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { GlobalStyle } from "./styles/global";

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
  useState(false);
function handleOpenNewTransacionModal() {
  setIsNewTransactionModalOpen(true);
}
function handleCloseNewTransacionModal() {
  setIsNewTransactionModalOpen(false);
}
  return (
    <TransactionsProvider  >
      <Header onOpenNewTransactionModal={handleOpenNewTransacionModal}/>
      <Dashboard />
      <NewTransactionModal isOpen={isNewTransactionModalOpen}  onRequestClose={handleCloseNewTransacionModal}/>
      <GlobalStyle />
    </TransactionsProvider>
  );
}


