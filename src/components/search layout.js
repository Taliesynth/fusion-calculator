import { useState } from 'react'
import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import { search_button, search_container} from './search layout.module.css'

const SearchLayout = () => {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const data = useStaticQuery(graphql`
      query {
        allMdx {
          nodes {
            frontmatter {
              title
              slug
            }
          }
        }
      }
    `);
  
    const handleSearch = () => {

      const filteredNodes = data.allMdx.nodes.filter((node) =>
        node.frontmatter.title.toLowerCase().includes(searchValue.toLowerCase())
      );
  
      setSearchResult(filteredNodes);
    };
  
    const handleChange = (event) => {

      setSearchValue(event.target.value);
    };
  
    return (
      <div>
        <div className={search_container}>
          <input
            type="text"
            id="searchInput"
            placeholder="Search by keyword..."
            onChange={handleChange} 
          />
          <button
            className={search_button}
            id="searchButton"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
        <div>
          <div>
            {searchResult.map((node) => (
              <div>
                <h2>
                  <Link to={`../compendium/${node.frontmatter.slug}`}>
                    {node.frontmatter.title}
                  </Link>
                </h2>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default SearchLayout;