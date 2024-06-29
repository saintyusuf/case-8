# Case - Product Listing and Editing

<table>
  <tbody>
    <tr>
      <td>
        Requested
      </td>
      <td>
        <h3>Overview</h3>
        <p>Two screens are required as a project. It is sufficient to create product listing and product editing screens.</p>
        <h3>Desired Features</h3>
        <ol>
          <li>
            <p>Product listing</p>
            <ul>
              <li>Listing products on the screen using PrimeReact - DataTable component</li>
            </ul>
          </li>
          <li>
            <p>Product editing</p>
            <ul>
              <li>It is expected to enter the product's information and properties on a single screen using PrimeReact components.</li>
              <li>It is expected to select a category using Dropdown for CategoryId. The content of the Dropdown will be taken from the category.json file.</li>
              <li>For ProductSettings, it is expected to be able to add, edit, and delete in a table on the same screen (There is no need to use Datatable).</li>
              <ul>
                <li>It is expected to use Dropdown for SettingId. The content of the Dropdown will be taken from the setting.json file.</li>
                <li>It is expected to use InputText for Value.</li>
              </ul>
            </ul>
          </li>
        </ol>
        <h3>Technology to be Used</h3>
        <ul>
          <li><strong>Programming Language:</strong> React.js</li>
          <li><strong>Framework:</strong> Next.js</li>
          <li><strong>Component Library:</strong> Prime React</li>
          <li><strong>Database:</strong> Json files in the Data folder</li>
      </td>
    </tr>
    <tr>
      <td>
        Result
      </td>
      <td>
        <img src="https://github.com/saintyusuf/case-productListingAndEditing/blob/main/case-details/result1.png" alt="Result">
        <img src="https://github.com/saintyusuf/case-productListingAndEditing/blob/main/case-details/result2.png" alt="Result">
      </td>
    </tr>
  </tbody>
</table>


## About

This is a case study to measure some React.js/Next.js skills such as; learning and using a ui library from scratch, input handling, query (search) params handling, data table handling.

## Stack

HTML, CSS, JS, TS, React.js, Next.js, Prime React

## Installation

Clone the repository
```bash 
git clone https://github.com/saintyusuf/case-productListingAndEditing.git
```

Change directory
```bash 
cd case-productListingAndEditing
```

Install dependencies
```bash
npm install
```

Run the project
```bash
npm run dev
```