const categories = [
  ["Vegetables", "VEG", "Tomato, onion, potato, chilli"],
  ["Grains", "GRN", "Rice, wheat, maize, jowar"],
  ["Pulses", "PUL", "Tur, chana, moong, urad"],
  ["Fruits", "FRT", "Mango, banana, citrus, grapes"],
  ["Poultry", "POU", "Chicken, egg, duck, quail"],
  ["Livestock", "LIV", "Goat, sheep, cattle, buffalo"],
  ["Fish", "FSH", "Rohu, catla, prawns, pomfret"],
  ["Dairy", "DRY", "Milk, paneer, ghee, curd"]
];

const prices = [
  ["Tomato", "Vegetables", "Telangana", "Hyderabad", "Bowenpally", "Rs/Quintal", "1500", "1800", "1650", "Today", "up"],
  ["Onion", "Vegetables", "Maharashtra", "Nashik", "Lasalgaon", "Rs/Quintal", "2100", "2550", "2325", "Today", "up"],
  ["Potato", "Vegetables", "Uttar Pradesh", "Agra", "Sikandra", "Rs/Quintal", "1100", "1380", "1240", "Today", "down"],
  ["Rice", "Grains", "Punjab", "Ludhiana", "Khanna", "Rs/Quintal", "2800", "3260", "3030", "Today", "flat"],
  ["Wheat", "Grains", "Madhya Pradesh", "Indore", "Mhow", "Rs/Quintal", "2425", "2680", "2552", "Today", "up"],
  ["Chana Dal", "Pulses", "Karnataka", "Bengaluru", "Yeshwanthpur", "Rs/Quintal", "6200", "6900", "6550", "Today", "down"],
  ["Mango", "Fruits", "Andhra Pradesh", "Chittoor", "Madanapalle", "Rs/Quintal", "4200", "5600", "4900", "Today", "up"],
  ["Broiler Chicken", "Poultry", "Tamil Nadu", "Namakkal", "Namakkal", "Rs/Kg", "118", "142", "130", "Today", "flat"],
  ["Egg", "Poultry", "Telangana", "Warangal", "Enumamula", "Rs/100 pcs", "510", "560", "535", "Today", "up"],
  ["Goat", "Livestock", "Rajasthan", "Jaipur", "Chomu", "Rs/Head", "6200", "9200", "7700", "Today", "up"],
  ["Buffalo", "Livestock", "Haryana", "Rohtak", "Meham", "Rs/Head", "52000", "88000", "70000", "Today", "flat"],
  ["Rohu Fish", "Fish", "West Bengal", "Kolkata", "Howrah Fish Market", "Rs/Kg", "160", "220", "190", "Today", "down"],
  ["Milk", "Dairy", "Gujarat", "Anand", "Anand Dairy", "Rs/Litre", "42", "56", "49", "Today", "flat"]
];

const featured = [
  ["Tomato", "Rs 1,650/qtl", "+8.2%", "Vegetables"],
  ["Onion", "Rs 2,325/qtl", "+4.1%", "Vegetables"],
  ["Rice", "Rs 3,030/qtl", "Stable", "Grains"],
  ["Turmeric", "Rs 13,800/qtl", "+11.4%", "Spices"],
  ["Chicken", "Rs 130/kg", "Stable", "Poultry"],
  ["Goat", "Rs 7,700/head", "+3.6%", "Livestock"]
];

const states = ["Telangana", "Andhra Pradesh", "Karnataka", "Tamil Nadu", "Kerala", "Maharashtra", "Punjab", "Haryana", "Uttar Pradesh", "Gujarat", "West Bengal", "Odisha"];

export const metadata = {
  title: "MarketFarmer.in | India's Agricultural Market Price Dashboard",
  description: "Compare daily agricultural market prices across Indian states, markets, categories, and commodities.",
  openGraph: {
    title: "MarketFarmer.in",
    description: "India's Agricultural Market Price Dashboard",
    url: "https://www.marketfarmer.in/",
    siteName: "MarketFarmer.in",
    type: "website"
  }
};

export default function Home() {
  return (
    <main className="mfPage">
      <a className="toolsShortcut" href="/tools" aria-label="Open tools page">Tools</a>

      <nav className="mfNav" aria-label="Main navigation">
        <a className="brand" href="#top"><span>MF</span>MarketFarmer.in</a>
        <div>
          <a href="#prices">Prices</a>
          <a href="#categories">Categories</a>
          <a href="#states">States</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="mfHero" id="top">
        <div className="heroCopy">
          <p className="eyebrow">India&apos;s Agricultural Market Price Dashboard</p>
          <h1>Know Today&apos;s Market Prices Across India</h1>
          <p>Compare prices across states and make informed selling and buying decisions for crops, livestock, poultry, fish, and dairy.</p>
          <div className="heroActions">
            <a className="primaryCta" href="#prices">View Prices</a>
            <a className="secondaryCta" href="#categories">Explore Categories</a>
          </div>
        </div>
        <div className="heroVisual" aria-label="Modern farming and marketplace dashboard preview">
          <img src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1200&q=80" alt="Indian farming fields and fresh agricultural produce" />
          <div className="marketPulse">
            <span>Live mandi pulse</span>
            <strong>+6.8%</strong>
            <small>Vegetable arrivals trending higher today</small>
          </div>
        </div>
      </section>

      <section className="statGrid" aria-label="MarketFarmer coverage statistics">
        {[
          ["28", "States Covered"],
          ["1,450+", "Markets Covered"],
          ["200+", "Commodities"],
          ["Daily", "Updated"]
        ].map(([value, label]) => (
          <article className="statCard" key={label}>
            <strong>{value}</strong>
            <span>{label}</span>
          </article>
        ))}
      </section>

      <section className="sectionBlock" id="categories">
        <div className="sectionHead">
          <p className="eyebrow">Categories</p>
          <h2>Track every major farm market segment</h2>
        </div>
        <div className="categoryGrid">
          {categories.map(([name, code, desc]) => (
            <a className="categoryCard" href="#prices" key={name}>
              <span>{code}</span>
              <h3>{name}</h3>
              <p>{desc}</p>
            </a>
          ))}
        </div>
      </section>

      <section className="dashboard" id="prices">
        <div className="sectionHead">
          <p className="eyebrow">Main Price Dashboard</p>
          <h2>Daily market price discovery</h2>
        </div>

        <div className="filters" aria-label="Price filters preview">
          <input type="search" placeholder="Search commodity" aria-label="Search commodity" />
          <select aria-label="State"><option>All States</option>{states.map(state => <option key={state}>{state}</option>)}</select>
          <select aria-label="District"><option>All Districts</option><option>Hyderabad</option><option>Nashik</option><option>Indore</option></select>
          <select aria-label="Market"><option>All Markets</option><option>Bowenpally</option><option>Lasalgaon</option><option>Khanna</option></select>
          <select aria-label="Category"><option>All Categories</option>{categories.map(([name]) => <option key={name}>{name}</option>)}</select>
          <input type="date" aria-label="Date" />
          <select aria-label="Sort by"><option>Sort by Average Price</option><option>Highest first</option><option>Lowest first</option></select>
          <button type="button">Reset Filters</button>
        </div>

        <div className="tableWrap">
          <table>
            <thead>
              <tr>
                {["Commodity", "Category", "State", "District", "Market", "Unit", "Min", "Max", "Average", "Updated", "Trend"].map(head => <th key={head}>{head}</th>)}
              </tr>
            </thead>
            <tbody>
              {prices.map((row) => (
                <tr key={`${row[0]}-${row[2]}`}>
                  {row.map((cell, index) => index === 10 ? <td key={index}><span className={`trend ${cell}`}>{cell === "up" ? "Up" : cell === "down" ? "Down" : "Stable"}</span></td> : <td key={index}>{cell}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="splitSection">
        <div className="chartCard">
          <p className="eyebrow">Trend Chart</p>
          <h2>Weekly commodity movement</h2>
          <div className="barChart" aria-label="Static weekly price trend visual">
            {[52, 68, 61, 74, 82, 77, 90].map((height, index) => <span style={{height: `${height}%`}} key={index}></span>)}
          </div>
        </div>
        <div className="statePanel" id="states">
          <p className="eyebrow">State Comparison</p>
          <h2>Compare leading agricultural markets</h2>
          <div className="stateList">
            {states.slice(0, 8).map((state, index) => (
              <div key={state}><span>{state}</span><strong>{index % 3 === 0 ? "High arrivals" : index % 3 === 1 ? "Stable" : "Price gains"}</strong></div>
            ))}
          </div>
        </div>
      </section>

      <section className="sectionBlock">
        <div className="sectionHead">
          <p className="eyebrow">Featured Commodities</p>
          <h2>Fast moving prices today</h2>
        </div>
        <div className="featuredGrid">
          {featured.map(([name, price, move, category]) => (
            <article className="featuredCard" key={name}>
              <span>{category}</span>
              <h3>{name}</h3>
              <strong>{price}</strong>
              <p>{move}</p>
              <a href="#prices">View Details</a>
            </article>
          ))}
        </div>
      </section>

      <section className="infoGrid">
        <article>
          <p className="eyebrow">Latest Updates</p>
          <h3>Tomato arrivals rise in Telangana</h3>
          <p>Fresh arrivals improved in key Hyderabad markets, softening retail pressure.</p>
        </article>
        <article>
          <p className="eyebrow">Education</p>
          <h3>How to choose the best market</h3>
          <p>Compare transport cost, demand, market fee, arrival volume, and recent trend before selling.</p>
        </article>
        <article>
          <p className="eyebrow">Download</p>
          <h3>Reports for farmers and traders</h3>
          <p>CSV, PDF, print, and share workflows can be connected when live APIs are added.</p>
        </article>
      </section>

      <section className="faq">
        <div className="sectionHead">
          <p className="eyebrow">FAQ</p>
          <h2>Useful answers</h2>
        </div>
        {[
          ["How are prices updated?", "This demo uses realistic sample data and is structured for future AGMARKNET, eNAM, or custom API integration."],
          ["Can I compare markets?", "Yes. The dashboard layout supports state, district, market, category, sorting, and trend comparison."],
          ["Can I download reports?", "The design includes CSV, PDF, print, and share sections for future report exports."]
        ].map(([question, answer]) => (
          <details key={question}>
            <summary>{question}</summary>
            <p>{answer}</p>
          </details>
        ))}
      </section>

      <footer className="mfFooter" id="contact">
        <div>
          <a className="brand" href="#top"><span>MF</span>MarketFarmer.in</a>
          <p>Premium agricultural market intelligence for farmers, traders, and buyers across India.</p>
        </div>
        <div>
          <a href="#prices">Prices</a>
          <a href="#categories">Categories</a>
          <a href="#states">States</a>
          <a href="mailto:hello@marketfarmer.in">Contact</a>
        </div>
      </footer>
    </main>
  );
}
