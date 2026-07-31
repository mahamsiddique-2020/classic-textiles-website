import React, { useState } from 'react';
import { Search, Filter, ArrowRight, Eye, Check } from 'lucide-react';
import { products, categories } from '../data/products';
import './ProductsSection.css';

export default function ProductsSection() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const filteredProducts = products.filter((product) => {
    const matchesCategory = activeCategory === 'All' || product.category === activeCategory;
    const matchesSearch =
      product.productName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.composition.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="products" className="products-section">
      <div className="container">
        {/* HEADER & SEARCH */}
        <div className="products-header-flex">
          <div className="header-text-block">
            <span className="badge-subtitle">OUR PRODUCTS</span>
            <h2 className="section-title">Our Fabrics & Textile Range</h2>
            <p className="section-description">
              Explore our comprehensive range of premium textiles, engineered for the world's most demanding manufacturers.
            </p>
          </div>

          <div className="search-box-wrapper">
            <Search className="search-icon" size={20} />
            <input
              type="text"
              placeholder="Search fabrics by name or fiber..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
          </div>
        </div>

        {/* CATEGORY FILTERS */}
        <div className="filter-bar-container">
          <div className="filter-label">
            <Filter size={18} />
            <span>Filter:</span>
          </div>

          <div className="filter-buttons-scroll">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* PRODUCTS GRID */}
        {filteredProducts.length > 0 ? (
          <div className="products-grid">
            {filteredProducts.map((product) => (
              <div key={product.id} className="product-card group">
                <div className="product-image-frame">
                  <img
                    src={product.image}
                    alt={product.productName}
                    loading="lazy"
                    className="product-img"
                  />
                  <div className="product-category-pill">{product.category}</div>
                </div>

                <div className="product-card-body">
                  <h3 className="product-title">{product.productName}</h3>
                  <p className="product-short-desc">{product.shortDescription}</p>

                  <div className="product-card-footer">
                    <div className="composition-tag">
                      {product.composition.split(',')[0]}
                    </div>

                    <button
                      className="product-arrow-btn"
                      onClick={() => setSelectedProduct(product)}
                      title="View Details"
                      aria-label="View Details"
                    >
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="no-products-state">
            <h3>No fabrics found</h3>
            <p>We couldn't find any fabrics matching your search criteria or current filters.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('All');
              }}
              className="btn-primary"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>

      {/* DETAIL MODAL */}
      {selectedProduct && (
        <div className="product-modal-backdrop" onClick={() => setSelectedProduct(null)}>
          <div className="product-modal-card" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setSelectedProduct(null)}>×</button>

            <div className="modal-top">
              <span className="badge-subtitle">{selectedProduct.category}</span>
              <h2>{selectedProduct.productName}</h2>
              <p className="composition-label">Composition: {selectedProduct.composition}</p>
            </div>

            <div className="modal-body">
              <p className="modal-desc">{selectedProduct.shortDescription}</p>
              
              <h4 className="specs-heading">Technical Specifications:</h4>
              <ul className="modal-specs-list">
                {selectedProduct.specs.map((spec, i) => (
                  <li key={i}><Check size={16} className="text-accent" /> {spec}</li>
                ))}
              </ul>

              <div className="modal-actions">
                <a
                  href="#contact"
                  className="btn-primary w-full text-center justify-center"
                  onClick={() => setSelectedProduct(null)}
                >
                  Inquire For {selectedProduct.productName}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
