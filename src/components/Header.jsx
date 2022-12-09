import { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  AiOutlineShoppingCart,
  AiOutlineLogin,
  AiOutlineSearch,
} from "react-icons/ai";
import { MdAccountCircle, MdOutlineFavorite } from "react-icons/md";
import "./Header.css";
import { AccountContext } from "../context/account";
import { DonutContext } from "../context/donuts";

const Header = () => {
  const { user } = useContext(AccountContext);
  const location = useLocation();

  const { searchInput, setSearchInput } = useContext(DonutContext);

  return (
    <div className="header">
      <div className="left">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/donuts">Donuts</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          {location.pathname === "/donuts" && (
            <li className="search">
              <AiOutlineSearch className="search-bar" />
              <input
                type="text"
                name="search"
                value={searchInput}
                onChange={(e) => {
                  console.log(e.target.value);
                  setSearchInput(e.target.value);
                }}
              />
            </li>
          )}
        </ul>
      </div>
      <div className="right">
        <ul>
          <li>
            <a href="/favorite">
              <MdOutlineFavorite />
            </a>
          </li>
          <li>
            <a href="/cart">
              <AiOutlineShoppingCart />
            </a>
          </li>
          <li>
            {user ? (
              <>
                <Link to="/account">
                  <MdAccountCircle />
                </Link>
              </>
            ) : (
              <Link to="/login">
                <AiOutlineLogin />
              </Link>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
