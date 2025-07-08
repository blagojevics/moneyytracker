const amountInput = document.getElementById("amountInput");
const categoryInput = document.getElementById("categoryInput");
const dateInput = document.getElementById("dateInput");
const addBtn = document.getElementById("addBtn");
const expenseList = document.getElementById("expenseList");
const totalDisplay = document.getElementById("totalDisplay");
const expenses = [];
const addExpense = () => {
  let amount = amountInput.value;
  let category = categoryInput.value;
  let date = dateInput.value;

  expenses.push({ amount, category, date });

  let latestExpenses = expenses[expenses.length - 1];
  let createExpense = document.createElement("li");
  createExpense.textContent = `RSD: ${latestExpenses.amount} - Potroseno na/u: ${latestExpenses.category} - Dana: ${latestExpenses.date}`;
  expenseList.appendChild(createExpense);
  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "del";
  createExpense.appendChild(deleteBtn);
  expenseList.appendChild(createExpense);

  deleteBtn.addEventListener("click", () => {
    confirm("Da li ste sigurni da zelite da obrisete?");
    expenseList.removeChild(createExpense);
  });
};

addBtn.addEventListener("click", () => {
  addExpense();
});
