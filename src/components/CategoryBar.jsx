import { MOVIE_CATEGORIES } from "../constants/categories";

function CategoryBar({ selectedCategory, onSelectCategory }) {
  return (
    <div className="flex gap-4 overflow-x-auto p-2">
      {MOVIE_CATEGORIES.map((cat) => (
        <button
          key={cat.id}
          onClick={() => onSelectCategory(cat.id)}
          className={`px-4 py-2 rounded ${
            selectedCategory === cat.id ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          {cat.title}
        </button>
      ))}
    </div>
  );
}
