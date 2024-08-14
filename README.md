# GeoThai Website

Welcome to the **GeoThai Website**! 🌏✨ This site serves as the central hub for accessing geographic data and resources related to Thailand. It includes a RESTful API, design assets, and documentation for our various packages.

## 🚀 Overview

-   **RESTful API**: Retrieve detailed geographic data of provinces, districts, and subdistricts in Thailand.
-   **Design Assets**: Access logos, icons, favicons, and other design resources.
-   **Documentation**: Explore API documentation and guides for additional packages.

## 🌐 RESTful API

The GeoThai RESTful API provides endpoints to access comprehensive geographic data:

-   **Provinces**: Retrieve information about Thai provinces.
-   **Districts**: Get details on districts within each province.
-   **Subdistricts**: Access data on subdistricts within each district.

### Base URL

```
https://geothai.vercel.app
```

### Endpoints

#### 1. **Retrieve All Provinces**

-   **Endpoint**: `GET /api/provinces`
-   **Description**: Retrieves a list of all provinces.
-   **Response**:
    ```json
    [
      {
        "id": 1,
        "province_id": 1,
        "province_name_en": "Bangkok",
        "province_name_th": "กรุงเทพมหานคร"
      },
      ...
    ]
    ```

#### 2. **Retrieve Province by ID**

-   **Endpoint**: `GET /api/provinces/{provinceId}`
-   **Description**: Retrieves a single province by its ID.
-   **Parameters**:
    -   `provinceId`: The ID of the province to retrieve.
-   **Response**:
    ```json
    {
        "id": 1,
        "province_id": 1,
        "province_name_en": "Bangkok",
        "province_name_th": "กรุงเทพมหานคร"
    }
    ```

#### 3. **Retrieve All Districts**

-   **Endpoint**: `GET /api/districts`
-   **Description**: Retrieves a list of all districts.
-   **Response**:
    ```json
    [
      {
        "id": 1,
        "province_id": 1,
        "district_id": 1,
        "district_name_en": "Pathum Wan",
        "district_name_th": "ปทุมวัน",
        "postal_code": 10330
      },
      ...
    ]
    ```

#### 4. **Retrieve District by ID**

-   **Endpoint**: `GET /api/districts/{districtId}`
-   **Description**: Retrieves a single district by its ID.
-   **Parameters**:
    -   `districtId`: The ID of the district to retrieve.
-   **Response**:
    ```json
    {
        "id": 1,
        "province_id": 1,
        "district_id": 1,
        "district_name_en": "Pathum Wan",
        "district_name_th": "ปทุมวัน",
        "postal_code": 10330
    }
    ```

#### 5. **Retrieve All Subdistricts**

-   **Endpoint**: `GET /api/subdistricts`
-   **Description**: Retrieves a list of all subdistricts.
-   **Response**:
    ```json
    [
      {
        "id": 1,
        "province_id": 1,
        "district_id": 1,
        "subdistrict_id": 1,
        "subdistrict_name_en": "Ratchaprasong",
        "subdistrict_name_th": "ราชประสงค์",
        "postal_code": 10330
      },
      ...
    ]
    ```

#### 6. **Retrieve Subdistrict by ID**

-   **Endpoint**: `GET /api/subdistricts/{subdistrictId}`
-   **Description**: Retrieves a single subdistrict by its ID.
-   **Parameters**:
    -   `subdistrictId`: The ID of the subdistrict to retrieve.
-   **Response**:
    ```json
    {
        "id": 1,
        "province_id": 1,
        "district_id": 1,
        "subdistrict_id": 1,
        "subdistrict_name_en": "Ratchaprasong",
        "subdistrict_name_th": "ราชประสงค์",
        "postal_code": 10330
    }
    ```

#### 7. **Retrieve Provinces by Criterion**

-   **Endpoint**: `GET /api/provinces/search`
-   **Description**: Retrieves provinces based on search criteria.
-   **Parameters** (query parameters):
    -   `province_name_en`: The English name of the province.
    -   `province_name_th`: The Thai name of the province.
    -   `province_id`: The ID of the province.
-   **Response**:
    ```json
    [
      {
        "id": 1,
        "province_id": 1,
        "province_name_en": "Bangkok",
        "province_name_th": "กรุงเทพมหานคร"
      },
      ...
    ]
    ```

#### 8. **Retrieve Districts by Criterion**

-   **Endpoint**: `GET /api/districts/search`
-   **Description**: Retrieves districts based on search criteria.
-   **Parameters** (query parameters):
    -   `district_name_en`: The English name of the district.
    -   `district_name_th`: The Thai name of the district.
    -   `postal_code`: The postal code of the district.
    -   `district_id`: The ID of the district.
    -   `province_id`: The ID of the province.
-   **Response**:
    ```json
    [
      {
        "id": 1,
        "province_id": 1,
        "district_id": 1,
        "district_name_en": "Pathum Wan",
        "district_name_th": "ปทุมวัน",
        "postal_code": 10330
      },
      ...
    ]
    ```

#### 9. **Retrieve Subdistricts by Criterion**

-   **Endpoint**: `GET /api/subdistricts/search`
-   **Description**: Retrieves subdistricts based on search criteria.
-   **Parameters** (query parameters):
    -   `subdistrict_name_en`: The English name of the subdistrict.
    -   `subdistrict_name_th`: The Thai name of the subdistrict.
    -   `postal_code`: The postal code of the subdistrict.
    -   `subdistrict_id`: The ID of the subdistrict.
    -   `district_id`: The ID of the district.
    -   `province_id`: The ID of the province.
-   **Response**:
    ```json
    [
      {
        "id": 1,
        "province_id": 1,
        "district_id": 1,
        "subdistrict_id": 1,
        "subdistrict_name_en": "Ratchaprasong",
        "subdistrict_name_th": "ราชประสงค์",
        "postal_code": 10330
      },
      ...
    ]
    ```

## 🎨 Design Assets

We provide a collection of design assets for the GeoThai brand, including logos, icons, and favicons. These resources are available for download in the `/press` directory:

-   **Logos**: High-resolution logos for various use cases.
-   **Icons**: Icons for web and mobile applications.
-   **Favicons**: Favicons for browser tabs and bookmarks.

Explore the assets [here](https://geothai.vercel.app/press).

## 🤝 Contributing

We welcome contributions to improve our website and API. Please refer to our [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines on how to get involved.

## 📝 License

This project is licensed under the [MIT License](LICENSE). See the LICENSE file for details.

## 🙋‍♂️ Contact

For any questions, support, or feedback, please reach out to us at [pyyupsk@proton.me](mailto:pyyupsk@proton.me).

Thank you for visiting the GeoThai website! 🌟
