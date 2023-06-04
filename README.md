# **The Food Delivery App**

## **Description**

---

"Food Delivery Application" is a food delivery application that uses a convenient way to order and receive various dishes from cafes and restaurants. The app is made up of two main pages: the store page and the shopping cart page. In addition, it also provides an order history view for registered users.

### **Page with shops:**

On this page, users can view available restaurants and cafes that offer food delivery services.

### **Shopping cart page:**

On this page, users can view and manage their order. They can add and remove items from the cart, change the amount of food, and view the total amount of the order.

### **Order history page:**

Users can access the order history page. Here they can view their previous orders using the email address and phone number they entered. The order history provides information about the details of the order, including the dishes selected, the date and time of the order.

## **Dependencies**

---

### **Production:**

-   @reduxjs/toolkit: ^1.9.5
-   react: ^18.2.0
-   react-dom: ^18.2.0
-   react-google-recaptcha: ^2.1.0
-   react-icons: ^4.9.0
-   react-redux: ^8.0.7
-   react-router-dom: ^6.11.2

### **Development:**

-   concurrently: ^8.1.0
-   json-server: ^0.17.3
-   prettier: ^2.8.8
-   prettier-plugin-tailwindcss: ^0.3.0
-   tailwindcss: ^3.3.2
-   typescript: ^5.1.3

## **Instalation:**

---

1. Go to the repository page on [GitHub](https://github.com/Cashisfsg/the-food-delivery-app.git).

2. Find the **"Code"** button and click on it. A dropdown menu will appear.

3. Copy the link to the repository. You can choose either an HTTPS or SSH link, depending on your preference and your system settings.

4. Open a terminal or command prompt on your computer.

5. Navigate to the folder where you want to clone the project.
   To do this, use the **`cd`** command, for example:

```
cd path/to/folder/project
```

6. Use the **`git clone`** command and then paste the copied repository link. Command example:

```
git clone https://github.com/your-repository-link.git
```

7. Wait for the cloning process to complete. The **`git clone`** command will download all files and project history to your computer.

8. Navigate to the project folder using the **`cd`** command.

9. Make sure you have Node.js installed on your machine. You can check this by running **`node -v`** on the command line. If Node.js is not installed, visit the official [Node.js](https://nodejs.org) website and download and install the latest stable version for your operating system.

10. Run the **`npm install`** command. This command installs all the dependencies listed in the **dependencies** section.

11. Wait for the dependency installation process to complete.

12. Once the dependencies are installed, you can run the project using the command:

```
npm run dev
```

## **Environment setting**

---

1. In the root folder of your React project, create a new file called **`.env`**.

2. Open the **`.env`** file in editor and add environment variables:

```
REACT_APP_GOOGLE_RECAPTCHA_SITE_KEY=your_sitekey
```

3. Save the **`.env`** file.

## **Google reCAPTCHA v2 Site Key**

---

1. Go to the official [Google reCAPTCHA](https://www.google.com/recaptcha) website and sign in to your Google account. If you don't have a Google account, create a new one.

2. On the Google reCAPTCHA page, click on the **"Admin Console"** button in the top right corner.

3. You will be redirected to the **"reCAPTCHA Admin Console"** page. On this page, click on the **"Create"** button.

4. In the **"Register a new site"** section, select the reCAPTCHA type as **"reCAPTCHA v2"** and enter a name for your site in the **"Label"** field. You can also choose **"Invisible reCAPTCHA"** depending on your needs.

5. In the **"Domains"** field, enter the domain of your website where reCAPTCHA will be used. You can specify multiple domains by separating them with a comma. For example: **`localhost`**

6. (Optional) If you have specific paths or actions on your website that need protection, you can configure them in the **"Owners"** and **"Advanced Settings"** sections.

7. Scroll down to the **"Accept reCAPTCHA Terms of Service"** section and agree to the terms of use.

8. Confirm that you are not a robot by completing the **"I'm not a robot"** verification and complete the verification process following the on-screen instructions.

9. Click on the **"Submit"** button to create your reCAPTCHA site.

10. After successfully creating the reCAPTCHA site, you will be provided with two keys: the **"Site Key"** and the **"Secret Key"**. The **"Site Key"** is the public key that you should use on your website to display reCAPTCHA. Save this key in a secure place.

11. Now you can use the **"Site Key"** to integrate Google reCAPTCHA v2 into your website.

## **Backend**

---

The server-side part of the application uses **JSON Server** as the backend.

JSON Server is a popular tool that provides a full-fledged RESTful API based on a JSON file. It's a great tool for prototyping, mocking APIs, and quickly setting up a backend for front-end development.

You can find the documentation for JSON Server at the following link:
[JSON Server Documentation](https://github.com/typicode/json-server)

### **Data structure**

The data is stored in a file located at **`/server/db.json`**. Here is the structure of the:

**Shops**

```
{
  id: string;
  name: string;
}
```

**Goods**

```
{
  id: string;
  name: string;
  price: number;
  url: string;
  shop_id: string;
}
```

**Orders**

```
{
  name: string;
  email: string;
  phone: string;
  address: string;
  cart: {
    goods: {
      id: string;
      name: string;
      price: number;
      url: string;
      shop_id: string;
      amount: number | string;
    }[];
    shop_id: string;
    totalCost: number;
  };
  timestamp: string;
  id: string;
}
```

## **Authors**

---

-   Cashisfsg
