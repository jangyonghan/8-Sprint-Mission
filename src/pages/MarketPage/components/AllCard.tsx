import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./style/AllCard.css";
import ItemCard from "./ItemCard";
import { ProductContext } from "../../../context/ProductContext";

interface product {
  id: number;
  name: string;
  price: number;
  description: string;
  images: string;
  createdAt: string;
  favoriteCount: number;
  tags: string;
}

type sort = "latest" | "favorite ";

function AllCard() {
  const [order, setOrder] = useState<sort>("latest");
  const itemList = useContext(ProductContext) as product[];

  const sortedItems = [...itemList].sort((a, b) => {
    if (order === "latest") {
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    } else if (order === "favorite ") {
      return b.favoriteCount - a.favoriteCount;
    }
    return 0;
  });

  const handleNewestClick = () => setOrder("latest");
  const handleBestClick = () => setOrder("favorite ");

  return (
    <div>
      <div className="allItemsSectionHeader">
        <h1 className="sectionTitle">전체 상품</h1>
        <div className="sectioncontent">
          <input
            id="serchBar"
            type="text"
            placeholder="검색할 상품을 입력해주세요"
            className="searchInput"
          />
          <Link to="/additem" className="loginLinkButton">
            상품 등록하기
          </Link>
          <div>
            <button onClick={handleNewestClick}>최신순</button>
            <button onClick={handleBestClick}>인기순</button>
          </div>
        </div>
      </div>
      <div className="allItemsCardSection">
        {sortedItems.map((item) => (
          <Link to={`/product/${item.id}`} key={item.id} className="itemLink">
            <ItemCard item={item} />
          </Link>
        ))}
      </div>
      ~~~~~~~~~~~~~~~~~~~~~~페이지네이션 들어가야함
      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    </div>
  );
}

export default AllCard;
