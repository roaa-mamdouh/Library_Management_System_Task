# Library Management System

This is a web-based Library Management System built using the Frappe Framework. The system allows librarians to manage books, members, and transactions efficiently. It includes features like CRUD operations for books and members, book issuance and returns, and integration with an external API for importing books.

---

## Features

1. **Book Management**:
   - Add, edit, and delete books.
   - Track stock, available quantity, and rented count.
   - Import books via an external API.

2. **Member Management**:
   - Add, edit, and delete members.
   - Track outstanding debt for members.

3. **Transaction Management**:
   - Issue books to members.
   - Return books and calculate rent fees.
   - Ensure members' outstanding debt does not exceed ₹500.

4. **API Integration**:
   - Import books from the Frappe API.
   - Specify the number of books and quantity per book.

---

## Screenshots and Descriptions

### 1. **Home Page**
![Screenshot from 2025-01-25 20-51-25.png](Screenshot%20from%202025-01-25%2020-51-25.png)
- The home page of the Library Management System, showing the main navigation menu.

### 2. **Navigation Menu**
![Screenshot from 2025-01-25 20-51-38.png](Screenshot%20from%202025-01-25%2020-51-38.png)
- The navigation menu with options for Books, Members, and Transactions.

### 4. **Empty Books List**
![Screenshot from 2025-01-25 21-01-22.png](Screenshot%20from%202025-01-25%2021-01-22.png)
- The initial state of the Books list view before any books are added.

### 5. **New Book Form**
![Screenshot from 2025-01-25 21-04-03.png](Screenshot%20from%202025-01-25%2021-04-03.png)
- The form for adding a new book, including fields for title, author, ISBN, publisher, and more.

### 6. **Books List with Data**
![Screenshot from 2025-01-25 21-07-12.png](Screenshot%20from%202025-01-25%2021-07-12.png)
- The Books list view after adding a book, showing details like title, status, and available quantity.

### 7. **Import Books Via API Dialog**
![Screenshot from 2025-01-25 21-11-44.png](Screenshot%20from%202025-01-25%2021-11-44.png)
- The dialog for importing books via the Frappe API, allowing the user to specify search parameters and quantity.

### 9. **Import Books Confirmation**
![Screenshot from 2025-01-25 21-11-53.png](Screenshot%20from%202025-01-25%2021-11-53.png)
- A confirmation message showing that books were successfully imported.
 
### 8. **Books List After Import**
![Screenshot from 2025-01-25 21-12-20.png](Screenshot%20from%202025-01-25%2021-12-20.png)
- The Books list view after importing books, showing the newly added books.


### 10. **New Transaction Form**
![Screenshot from 2025-01-25 21-14-20.png](Screenshot%20from%202025-01-25%2021-14-20.png)
- The form for creating a new transaction, including fields for member, book, issue date, and return date.

### 11. **Transaction Details**
![Screenshot from 2025-01-25 21-18-10.png](Screenshot%20from%202025-01-25%2021-18-10.png)
- The details page for a transaction, showing information like member, book, issue date, and total fee.

### 12. **Transaction List View**
![Screenshot from 2025-01-25 21-20-51.png](Screenshot%20from%202025-01-25%2021-20-51.png)
- The Transactions list view, displaying all transactions in the system.

### 13. **Transaction Return Action**
![Screenshot from 2025-01-25 21-24-37.png](Screenshot%20from%202025-01-25%2021-24-37.png)
- Returning transactions.

### 14. **Returned Transaction**
![Screenshot from 2025-01-25 22-39-51.png](Screenshot%20from%202025-01-25%2022-39-51.png)
- Details of a returned transaction, including the total fee.

### 15. **Transaction List Without Adding Filters**
![Screenshot from 2025-01-25 22-41-10.png](Screenshot%20from%202025-01-25%2022-41-10.png)
- The Transactions list view without filters applied.

### 16. **Filtered Transactions**
![Screenshot from 2025-01-25 22-41-32.png](Screenshot%20from%202025-01-25%2022-41-32.png)
- Filtered transactions showing only returned books.

### 17. **Issued Transactions**
![Screenshot from 2025-01-25 22-41-47.png](Screenshot%20from%202025-01-25%2022-41-47.png)
- Filtered transactions showing only issued books.

### 18. **New Member Form with Error**
![Screenshot from 2025-01-25 22-45-40.png](Screenshot%20from%202025-01-25%2022-45-40.png)
- The form for adding a new member, showing an error for an invalid email address.

### 19. **Member Details**
![Screenshot from 2025-01-25 22-46-21.png](Screenshot%20from%202025-01-25%2022-46-21.png)
- The details page for a member, showing information like name, email, phone, and outstanding debt.

### 20. **Members List View**
![Screenshot from 2025-01-25 22-46-30.png](Screenshot%20from%202025-01-25%2022-46-30.png)
- The Members list view, displaying all members in the system.

---

## How to Use

1. **Books**:
   - Add books manually or import them via the API.
   - Track stock and available quantity.

2. **Members**:
   - Add members and manage their details.
   - Ensure outstanding debt does not exceed ₹500.

3. **Transactions**:
   - Issue books to members.
   - Return books and calculate rent fees.

---

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
