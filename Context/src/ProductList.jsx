import { useCart } from "./CartContext";
import { Card, Button, Container, Row, Col } from "react-bootstrap";

const products = [
  {
    id: 1,
    name: "iPhone 15",
    price: 999,
    image:
      "data:image/jpeg;base64,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",
  },
  {
    id: 2,
    name: "Samsung Galaxy S24",
    price: 899,
    image:
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxEQEBESEBIQEhAQEA8QFQ8QFQ8VEhAPFRIWFhURFRUYHSggGBomHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDQ0NFQ8PFS0dFRkrKysrLS0rLzctLSsrKystNysrKystKysrKy0rKy0rNy03LS0tNy0tNzctKy03Ky0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAgIDAQAAAAAAAAAAAAAABQcEBgECAwj/xABPEAABAwICAwgJEQcDBQAAAAABAAIDBBEFEgYhMRMiQVFhcYGRB3JzobO0wdLTFBYjJTI0NUJSU1RikpOjsdEkQ1WUorLhY4LwM0WDwvH/xAAXAQEBAQEAAAAAAAAAAAAAAAAAAQID/8QAGxEBAQEBAQEBAQAAAAAAAAAAAAERMQJBIRL/2gAMAwEAAhEDEQA/ALxREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERARVSNJ65xd+0uFnvFtzpzqDjb4nFYdC5Oklf8ASnfd0/moLVRVQdJa/wClO+6pvMXQ6TV/0t33VN5iC2kVRnSjEPpbvuqbzF19dWIfSnfdU3mILeRU+dK8Q+lO+6pvMUbiGnuKRuYyOdrnSSPAMjIWta1kTHH3Md/jFBeSKhjp3jfztP1N9GvN2n+Nj99T/ZZ6NX+amxfqL5/d2Qsb+eg+yz0a6t7IeNk23aDb8mP0afzTY+gkVHTaWY6125+qaQy5HPbCNz3R7QCd60xa9i8oNNMce1rm1FMQ4Ajes4f/ABJlVeyKjPXfjvz9N9lvok9d+O/P032W+iTBeaKjhphjvz1N1D0Sz9GNM8Tkr4aepljLXOhcdzbHZzHPLC03YCNnAoLiREQEREBERAREQEREBERBSMR1v7d/9xWn6V6WSxyup6WzXMIa+Uta9xk4WMBBAAva9rk3W2MFi8fXf/cVXGl2Gyx1MkzGuLJHmTM25LJHa3A8Wu5B4QgzcA0wn3ZsVSQ9shDQ/K1rmOOoXLQARfVr169vAtzqq1kcZkecrGjMTycAtx3sLcZVa4Rh8kszJHsLWMcCLixe4awBznhW94jQ7tTOhJsXNaM31gQ4HrAQYmG6WQTybnaRjjfKXhtnW121E2Km3OWj4PotKyYPkLbMOrKTr4Lm/wDzy7kXKDsXKIrvfEHdKjwEaki5a/pBNkfC4bd2m8DGrOlT243WPPTldcLxAPA41L5AQu2uLWZhZeLHa1LYjT8SiS2xVai06fR+B9RFUuZedkYa193agQfi3sTvna7cKicXwY088jWj2OUOqIuv2WMcxOYcjlsWFYg0uyX1tDB/SFJaQ0e7U+Zn/VgcJWcZI903pFwsrqurLiyz66nAs9vuJBcch4WrFyrKy68rLro8Pbmn7Wm8O9e+VeOAj25pu1pvDvUqxfCIiyoiIgIiICIiAiIgIi4cdSCi82+f27/7io7GMQp4A01DrFwJa1oLpHNva4AtYXG0kX4LrIjlJBJtc7422XNzqVc6Uyk10+e5AksBe3sIAEYB4N5lQbphOKUkxO4OOcAktkaWyZeEi5II5ipJzlV+FgtqYchuc7Tq4uG/Rdb1ik8gpJHRX3TcxlIvmAzDMRy5cx50GyYtXMkbEGwiLI0gkfG2cmsauHjUYXKvtH6h4naYi4h190bckHVtceV2xb4XKZg7Fy1vSvZD3ebwMany5eENEyoqKeOQEtc+q2Eg3EEdjdWdK1SiqnMcCCt3wivEjV4YpoDI27qc7q35OoPHRsd0W5lDUbZKd9nNcLGxBBFjxEcBXVizW0TNzKKqIRdSLZRlv3lGVjnHgtzokZrcXMVZJr1Zx+QVm6P4y2VoudoVFYvVftMp+v5Ath0axssI18SMt8xKMMkkiPuHEvafk3194nvqGfGQSDtCmKiobMxr7i7QvCWDO27dbgL2+U3k5tqieblxG5VjYIPbmn7Wm8O9Z2VR1A8txenItfLSbdmupddT1x2i+URFhRERAREQEREBERAXDth5lyuHbDzIPnyJ2ocwUVjODR1JBcN+BlDgSHW+TsOYcX6alIB2odqFrGkmNy7s+ngkMLIiWPe0ua6SQDf5nDXa92ho1ar8KCQw7AWQk72x2EkkvI4vqhS7rWWlYHj0zZWRyyPkikcGWkJcWE6g5pOsWNtWw61t4fcIrhkLGm4AB49e3jXYuXUuXRzlB2c5e2Dn9rpu3q/F41iEr0w+XLU0p/1aofgRqzqVaFGV6Yhg0FSPZWb61hI3U9vTwjkNwsGhnupiCRdWWiYtopPT3dEDPF9QeyNHKzh/29QWrzuDgbHk/wAK6TKoHH9H6eru5w3OY/vo7BxP1hseOfXxEImKIxu4qph9Zp62NPlXvh9QWlZU9LG+V73uzuzFt26mOybzMOGxy36VxVVLomew2jB2uaN99rajNbRQYo5rLSOETSNRlIZfmB1u6AVPUGKteQWPD9m+yuAOvXbMARrG2ypovJdcm5JuXG5JPHfhW66JTFpy8Fzr5Tqtb/b31C+fre6gC+rZ5FD03wvT9rR+NOUw8foomH4Xp+1o/GnKeuOkXwiIsKIiICIiAiIgIiICgcV0pipqiOnmjmzTECN0bRIHm2zK05gdvBwKdcbC52BUtTYnNU41SuDsxE7i0P1hkWVxeAO1uBxINfqbZnBos3gba1m3Nhbg5lqOkmESPmdNCA7dDmezUHCT4zgDtBOvVsvbn2iWUuOY2u4BxtsudZsvJ2vbr51BrGG4bIZGyTNa0stljaGgucNhcG7B+i2dmoAcQ28a6gAbABzLguVV3Ll0Ll0Ll1LlB3JXhPNkfTO4p5/AxrkuWJiR3sHdp/BRqzqVY+DVeZoWyU8qrrRisuAOJbxSS3C6sRKPk1LVtO8aNLRyOabSSexR8Ye4HfDmAcehbCX6lUPZOxPdakRNO8gFjxGR1i49AsOgoqCwg7y3yTZShpw9paeEWURgWsvHMfItjpmKVnP1ptRTmN5B2tPe41L6MVBEoA4MrgBx52sPeeepSmPYTnZujRrbqPKFE6MOLK2nNs15Ay3AQ8FvezX6Fn618W1lUZQMBxqmBAIy0pseSoeQpVREDy3GKYi18tJt5alwV9cWL0REWFEREBERAREQEREEZpNVblSTuvY7m5oPE5+9B6zdVd2LaUy4lLLbVBA834pJCGgdWfqW5dlKt3OkDL65H9bWjX33NUb2F6O1NUTka5p8oPGyNurvucgq6U2IGsb1uoggjVsI4F5lyyMWPs0nbH8ysIuUV3JXUuXQldSUHYldSV1Ll0LkHcuWNiJ3kHdqjwUa9bryrfcwd2qPBRqzqVn4DUZJBxFWTQG4CqukbYhWPo3UhzADtC6VlJYtXCngklPxGkgHhdsaOuyoSumL3ve7W57i4k8NyrI7I+LXtTtOpu+fyuI1DoF/tBVzLCSqPfRt/wC0Nb8sOb02uPyW5NgIK07CIS2aJ3E9vVexVoR0d1mjyoqcPbY7CLKJodHNzro3fFa5z+lrSf0W30FJZSU1K0NLuEC3WQPKorAsoRo9t6ewJ3tHqAJPvpynrKJo/hul7Sl8Yer64LtREWFEREBERAREQEREFUdmGu9kZHwRx35nONz3si3fQKg9T4bSs4TEJDx5pCZD/dboVV6aSGsxLcx+9qWQi3EXiMHqAKvKNgaA0ag0AAcQGoIPmzGD7PJ2x/MrBJWXjR9nk7Y/mVgEqK7Fy6krrdcFyDsSupcut11JQdrpUC7afu1R4KNdLr1IuKfu1T4KNWdSvWMKawzETCCeIKKDVl0cG6Pa3gG+PMNnfsurKPqoHyvLna3OJcec7f06F1bhvIttFFyLq+kQa3HQWW/YYczW8oB7ygfUyl8LflIHIEGx08C9a1u8PKQPL5F6UTcwXOKx2YOV3kKzn6qHsoelHt3S9pS+MPU3ZQ1P8N0vc6Xxh6euEXUiIsKIiICIiAiIgLHxGp3KGWT5uN7+ppNlkLW+yDV7lQycBkc1g68x7zbdKCtdBaf1RjEROsQiWY/7RlaetwV3KrewvR3fWVB/04Gnre//ANFaSD5kxw/tEnbH8yo8uWbj3viTtj+ZUeSorklcLi66lyDtddS5dSVwg5usqPZT92qfBRrEWXDsp+7VXgY1Z1Kz2tWy6P0G8zka36x2o2eU9Kh6CkMr2sHxjbmHCeq6sKmpAAABYAW5gurCP9SrzkpVOep15SQIqAfTLwfvHsPHcdX/ANU6+BR2LQWa08TrdY/wg2jR45wFkaSNsIxx5j+X6qM0IluS3iUvpT7qMcTXHrP+FKRAWUHF8OUvc6Xxh6n7KBj+HKTudL4xIs2/ixdCIiyoiIgIiICIiAq47L9dZkUQPA6QjnNmn+l3WrHVJ9lWrMtY9jdeXLE0cuoW+0XIN87FNFuWGROIs6d8kx6XZW/0tatwWJhNGIKeGEbIoo4/stDfIstB8v6QH9ok5/KVGlykNIffMnOfzKjVFckrhFwiOUXF1xdBys6kF/U3dqrwMaj7qVwmIvfStaLudPUtA5TFGAr56XjfNDsOvmlI27xvN8Y9dh0FbcyJeeH0jYo2MGxrQL8Z4T0m56VlBdmXUxrzfEskLh4UEdJEsHFILxOtwZT3x/lTD2rFrLZHD6p/JBh6CC07gpzSc+zNHFG3+5xUHo2wx1g4nAqbx83ndyBg7w/VZrHiorKtfaPbyk7nS+MyLZMq1w/DtJ3Ol8ZkWa6RcyIiiiIiAiIgIiIOsjw0EnYASTyBUZhzDW4xTh2vNUGZw5GXlcD9nvq3tLKncqOd17XjLPtb3Vy2JPQq37ElGZK+ecg5YYcgPBukjuPma7rQW+iIg+XNIvfMnP5So26kdI/fMnP5SoxQckrglcJdFcFy4zLm64JQMy23QGPNV0g4Q+uI5xTs1rUrrcuxv79pO2r/ABdis6iwsQM7fcG3OAoGetrB++tzMj8oW7VUOZQ9Vh112jLWTidWP37/ALEHmL0jxWq+ef8AZh81ZtRh9uBYMrGs1uIbzkBW4j3GJVHDK77MfmqPrsbqAbNk18ZbGfIvGqxFtiGa+XZ+axaRhcc5tlvr4ehZW3G/6JU8kzGTOsHN4NlxxhZuJOzSvPLbqAHkURo3XyEOy6mDVm4zxDm/RSJ1rNZ8z687LW3/AA7SdypfGZFs61mX4dpO50vjMizW4uNERRRERAREQEREGkdlasyUrGX1veXc4aLW/rHUsfsNUeWilmO2eodY8bGANHfzqD7MVb7K1l9TIxq+sSSe8W9SsLQ7D/U1BSxHU5sLC4fXdvnd9xQTKIiD5a0j98yc/lKjFI6SaqmTnP5lRaiuSVwiICIiAt17GYvXUfbV/i7FpS3HsdG1ZSdtXeLxqzqLqlyjaQo6qqWjYCefUuJpwFHz1AXVlHYnLI69jlH1dR69q1mooiSSdZ4ztW2OBdsC4GFk7Rr/ACU0ae2itrPVwlZNLRSTSBjRYcLramM4T/zatxhwEbTz3XtBTNjvlG3aePiTUzXFNTtjY1jBZrRYfqeVell2RYV1WsT/AA7SdzpfGZFtNlq1QPb2j7lS+MyIsXEiIooiIgIiICIiDQdJNEH1uKRud71a2KWRxvvi05RC3jJy3PEDzX35EQEREHzbpBo1XPqHuZSVbgSdbYJzsc4fJ5L9IUadFq/6FWfcT+avqREHy3616/6FW/cT+anrXr/oVb9xP5q+pEQfLfrYr/oVb/Lz+anrYr/oVb/Lz+avqREHy3616/6FW/y8/mqWwiirqLcqj1DVO3GSozMdHPHZskTGh2YsItcFfRyIKJZpZXSm0eGTvNr2Y57jbjsI16R41iIOvBq09E3oleSK7RTcelFe0fAdd+L6FZEWmVe3/sVd1y+hVuIoKiqtNMSeMrcDrWjh/wCqb/grF9dGI/wWt/G9ErnRBTHroxH+C1v4vok9c+I/wWt/F9ErnRBTPrmxH+C1v4vol0wVtbU4rT1E1BU0zGep4t+yYizZXvLy7IA0AHhV0ogIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIg//Z",
  },
  {
    id: 3,
    name: "Google Pixel 8",
    price: 799,
    image:
      "data:image/jpeg;base64,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",
  },
  {
    id: 4,
    name: "iPhone 16 Pro Max",
    price: 1000,
    image:
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRgQXf8itwe8rPCclCE15ED9KHh6OBmUqzHUyI-_0CSIQOk5fuGWom772CKbPTFtLaN3fIHmgLe-qydlpvIU_n8DhMFy5IWAAkZKxovaOj5qLKH17kfbHj7A5UYjZUWABaIAphjkKg&usqp=CAc",
  },
  {
    id: 5,
    name: "iPhone XR",
    price: 200,
    image:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQcGRHBwUk1yvXelToCWwk8iUhAVk0PbAKHUoRFCb--SwYqPifL3K2IDHvQcVzOhOnLkLhQ9QIxUJVcRxXe4goOQU_zNXMy1LZk2CqRHrZuLkcLxfTaazZXfKmz1or5kgytFWru0A&usqp=CAc",
  },
];

const ProductList = () => {
  const { addToCart } = useCart();
  return (
    <Container>
      <h2>📦 Các sản phẩm</h2>
      <Row>
        {products.map((product) => (
          <Col key={product.id} className="mb-3">
            <Card id="product-phone" style={{ width: "18rem" }}>
              <Card.Img variant="top" src={product.image} alt={product.name} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>${product.price}</Card.Text>
                <div>
                  <span>⭐️⭐️⭐️⭐️⭐️</span>
                  <span>({5})</span>
                </div>
                <Button
                  variant="primary"
                  onClick={() => addToCart(product)}
                  style={{ backgroundColor: "#ee4d2d", borderColor: "#ee4d2d" }}
                >
                  Thêm giỏ hàng
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductList;
