import { useState } from 'react';
import { Search, Filter, Clock, User, ArrowRight } from 'lucide-react';
import { navigate } from '../hooks/useLocation';

const categories = [
  "All",
  "Christian Living",
  "Bible Study",
  "Theology",
  "Devotional",
  "Ministry",
  "Culture",
  "Family",
];

const ArticlePage = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-blue-800 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Articles</h1>
            <p className="text-xl text-blue-100">
              Explore our collection of articles on faith, theology, and Christian living.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="w-full md:w-96">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full px-4 py-2 pl-10 rounded-md border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center text-gray-600 dark:text-gray-400 hover:text-blue-800 dark:hover:text-blue-400 md:hidden"
            >
              <Filter className="h-5 w-5 mr-1" />
              Filters
            </button>
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Navigation */}
          <div className="mb-8">
            <div
              className={`md:flex overflow-x-auto whitespace-nowrap pb-2 ${
                showFilters ? "block" : "hidden md:block"
              }`}
            >
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 mr-2 rounded-md text-sm font-medium ${
                    activeCategory === category
                      ? "bg-blue-800 text-white"
                      : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                  } transition-colors`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Featured Articles */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
              Featured Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <FeaturedArticleCard
                title="Understanding God's Grace in Everyday Life"
                excerpt="Discover how God's grace manifests in our daily experiences and challenges."
                author="David Mitchell"
                date="May 15, 2025"
                readTime="8 min read"
                image="https://images.pexels.com/photos/2258536/pexels-photo-2258536.jpeg"
                category="Christian Living"
              />
              <FeaturedArticleCard
                title="The Biblical Framework of Faith and Works"
                excerpt="Examining the relationship between faith and works in Christian theology."
                author="Sarah Johnson"
                date="May 12, 2025"
                readTime="10 min read"
                image="https://images.pexels.com/photos/1615776/pexels-photo-1615776.jpeg"
                category="Theology"
              />
              <FeaturedArticleCard
                title="Prayer as Communion with God"
                excerpt="Exploring the deeper purpose of prayer beyond simply asking for things."
                author="John Davis"
                date="May 10, 2025"
                readTime="6 min read"
                image="https://images.pexels.com/photos/1471895/pexels-photo-1471895.jpeg"
                category="Devotional"
              />
            </div>
          </div>

          {/* Latest Articles */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
              Latest Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {latestArticles.map((article) => (
                <ArticleCard key={article.id} {...article} />
              ))}
            </div>
            <div className="text-center mt-8">
              <button className="px-6 py-3 bg-blue-800 text-white rounded-md font-medium hover:bg-blue-900 transition-colors inline-flex items-center">
                Load More Articles
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Popular Topics */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
              Popular Topics
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <TopicCard name="Prayer" count={24} />
              <TopicCard name="Faith" count={18} />
              <TopicCard name="Grace" count={15} />
              <TopicCard name="Bible Study" count={12} />
              <TopicCard name="Worship" count={10} />
              <TopicCard name="Family" count={9} />
              <TopicCard name="Ministry" count={8} />
              <TopicCard name="Discipleship" count={7} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

interface FeaturedArticleCardProps {
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  category: string;
}

const FeaturedArticleCard = ({
  title,
  excerpt,
  author,
  date,
  readTime,
  image,
  category,
}: FeaturedArticleCardProps) => (
  <div 
    className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md cursor-pointer group"
    onClick={() => navigate('/article/detail')}
  >
    <div className="h-48 overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
    </div>
    <div className="p-6">
      <div className="mb-3">
        <span className="inline-block px-3 py-1 text-xs font-semibold bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full">
          {category}
        </span>
      </div>
      <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-blue-800 dark:group-hover:text-blue-400 transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-400 mb-4">
        {excerpt}
      </p>
      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
        <User className="h-4 w-4 mr-1" />
        <span className="mr-4">{author}</span>
        <Clock className="h-4 w-4 mr-1" />
        <span>{readTime}</span>
      </div>
    </div>
  </div>
);

interface ArticleCardProps {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  category: string;
}

const ArticleCard = ({
  title,
  excerpt,
  author,
  date,
  readTime,
  image,
  category,
}: ArticleCardProps) => (
  <div 
    className="flex flex-col md:flex-row gap-6 cursor-pointer group"
    onClick={() => navigate('/article/detail')}
  >
    <div className="md:w-1/3 h-48 md:h-auto overflow-hidden rounded-lg">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
    </div>
    <div className="md:w-2/3">
      <div className="mb-3">
        <span className="inline-block px-3 py-1 text-xs font-semibold bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full">
          {category}
        </span>
      </div>
      <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-blue-800 dark:group-hover:text-blue-400 transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-400 mb-4">
        {excerpt}
      </p>
      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
        <User className="h-4 w-4 mr-1" />
        <span className="mr-4">{author}</span>
        <Clock className="h-4 w-4 mr-1" />
        <span>{readTime}</span>
      </div>
    </div>
  </div>
);

interface TopicCardProps {
  name: string;
  count: number;
}

const TopicCard = ({ name, count }: TopicCardProps) => (
  <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors cursor-pointer">
    <div className="flex justify-between items-center">
      <span className="font-medium text-gray-900 dark:text-white">{name}</span>
      <span className="text-sm text-gray-500 dark:text-gray-400">{count}</span>
    </div>
  </div>
);

const latestArticles = [
  {
    id: 1,
    title: "The Biblical Concept of Joy vs. Happiness",
    excerpt: "Understanding the difference between temporary happiness and lasting joy as described in scripture.",
    author: "David Mitchell",
    date: "May 15, 2025",
    readTime: "5 min read",
    image: "https://images.pexels.com/photos/1261731/pexels-photo-1261731.jpeg",
    category: "Christian Living"
  },
  {
    id: 2,
    title: "Understanding the Context of Paul's Letters",
    excerpt: "Examining the historical and cultural context behind Paul's writings to the early church.",
    author: "Mark Williams",
    date: "May 8, 2025",
    readTime: "9 min read",
    image: "https://images.pexels.com/photos/733854/pexels-photo-733854.jpeg",
    category: "Bible Study"
  },
  {
    id: 3,
    title: "The Role of the Holy Spirit in Daily Life",
    excerpt: "Exploring how the Holy Spirit guides and empowers believers in their everyday walk with God.",
    author: "Sarah Johnson",
    date: "May 7, 2025",
    readTime: "7 min read",
    image: "https://images.pexels.com/photos/1471895/pexels-photo-1471895.jpeg",
    category: "Theology"
  },
  {
    id: 4,
    title: "Building a Strong Christian Family",
    excerpt: "Practical biblical principles for nurturing faith and values in your family.",
    author: "Rachel Thompson",
    date: "May 6, 2025",
    readTime: "6 min read",
    image: "https://images.pexels.com/photos/1128318/pexels-photo-1128318.jpeg",
    category: "Family"
  }
];

export default ArticlePage;