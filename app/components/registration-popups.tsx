"use client";

import { useEffect, useState } from "react";
import { CheckCircle2, X } from "lucide-react";

// Generate dummy registration data
const firstNames = [
  "Patrick", "James", "Michael", "David", "Robert", "John", "Daniel", "Christopher", "Matthew", "Anthony",
  "Mark", "Steven", "Paul", "Andrew", "Joshua", "Kenneth", "Kevin", "Brian", "George", "Edward",
  "Ronald", "Timothy", "Jason", "Jeffrey", "Ryan", "Jacob", "Gary", "Nicholas", "Eric", "Jonathan",
  "Stephen", "Larry", "Justin", "Scott", "Brandon", "Benjamin", "Samuel", "Gregory", "Frank", "Alexander",
  "Raymond", "Patrick", "Jack", "Dennis", "Jerry", "Tyler", "Aaron", "Jose", "Adam", "Nathan",
  "Henry", "Douglas", "Zachary", "Peter", "Kyle", "Ethan", "Jeremy", "Walter", "Christian", "Keith",
  "Roger", "Terry", "Austin", "Sean", "Gerald", "Carl", "Dylan", "Harold", "Jordan", "Jesse",
  "Bryan", "Lawrence", "Arthur", "Gabriel", "Bruce", "Logan", "Billy", "Joe", "Alan", "Juan",
  "Wayne", "Roy", "Ralph", "Randy", "Eugene", "Vincent", "Russell", "Louis", "Philip", "Bobby",
  "Johnny", "Bradley", "Mary", "Patricia", "Jennifer", "Linda", "Elizabeth", "Barbara", "Susan", "Jessica",
  "Sarah", "Karen", "Lisa", "Nancy", "Betty", "Margaret", "Sandra", "Ashley", "Kimberly", "Emily",
  "Donna", "Michelle", "Carol", "Amanda", "Dorothy", "Melissa", "Deborah", "Stephanie", "Rebecca", "Sharon",
  "Laura", "Cynthia", "Kathleen", "Amy", "Angela", "Shirley", "Anna", "Brenda", "Pamela", "Emma",
  "Nicole", "Helen", "Samantha", "Katherine", "Christine", "Debra", "Rachel", "Carolyn", "Janet", "Catherine",
  "Maria", "Heather", "Diane", "Ruth", "Julie", "Olivia", "Joyce", "Virginia", "Victoria", "Kelly",
  "Lauren", "Christina", "Joan", "Evelyn", "Judith", "Megan", "Andrea", "Cheryl", "Hannah", "Jacqueline",
  "Martha", "Gloria", "Teresa", "Ann", "Sara", "Madison", "Frances", "Kathryn", "Janice", "Jean",
  "Abigail", "Alice", "Judy", "Sophia", "Grace", "Denise", "Amber", "Doris", "Marilyn", "Danielle",
  "Beverly", "Isabella", "Theresa", "Diana", "Natalie", "Brittany", "Charlotte", "Marie", "Kayla", "Alexis",
  "Lori", "Amanda", "Tiffany", "Kathy", "Tammy", "Crystal", "Alicia", "Erica", "Jamie", "Lindsay",
  "Tendai", "Tatenda", "Farai", "Kudzai", "Rutendo", "Nyasha", "Chipo", "Tafadzwa", "Blessing", "Tanaka",
  "Simba", "Ruvimbo", "Anesu", "Tinotenda", "Munesu", "Shamiso", "Tariro", "Kundai", "Tawanda", "Chiedza",
  "Thabo", "Sipho", "Lerato", "Nomsa", "Bongani", "Themba", "Njabulo", "Sibusiso", "Zanele", "Ayanda",
  "Chidi", "Emeka", "Ngozi", "Chinedu", "Obinna", "Amara", "Nkechi", "Ifeoma", "Chiamaka", "Uche",
  "Kwame", "Kofi", "Ama", "Yaw", "Akosua", "Kwesi", "Abena", "Kojo", "Efua", "Nana",
  "Wanjiru", "Kamau", "Njeri", "Otieno", "Achieng", "Mwangi", "Wambui", "Kipchoge", "Chebet", "Jepchirchir",
  "Abebe", "Tigist", "Dawit", "Selam", "Yohannes", "Meron", "Kidist", "Bereket", "Hirut", "Tewodros",
];

const lastNames = [
  "Smith", "Johnson", "Williams", "Brown", "Jones", "Garcia", "Miller", "Davis", "Rodriguez", "Martinez",
  "Hernandez", "Lopez", "Gonzalez", "Wilson", "Anderson", "Thomas", "Taylor", "Moore", "Jackson", "Martin",
  "Lee", "Perez", "Thompson", "White", "Harris", "Sanchez", "Clark", "Ramirez", "Lewis", "Robinson",
  "Walker", "Young", "Allen", "King", "Wright", "Scott", "Torres", "Nguyen", "Hill", "Flores",
  "Green", "Adams", "Nelson", "Baker", "Hall", "Rivera", "Campbell", "Mitchell", "Carter", "Roberts",
  "Gomez", "Phillips", "Evans", "Turner", "Diaz", "Parker", "Cruz", "Edwards", "Collins", "Reyes",
  "Stewart", "Morris", "Morales", "Murphy", "Cook", "Rogers", "Gutierrez", "Ortiz", "Morgan", "Cooper",
  "Peterson", "Bailey", "Reed", "Kelly", "Howard", "Ramos", "Kim", "Cox", "Ward", "Richardson",
  "Watson", "Brooks", "Chavez", "Wood", "James", "Bennett", "Gray", "Mendoza", "Ruiz", "Hughes",
  "Price", "Alvarez", "Castillo", "Sanders", "Patel", "Myers", "Long", "Ross", "Foster", "Jimenez",
  "Powell", "Jenkins", "Perry", "Russell", "Sullivan", "Bell", "Coleman", "Butler", "Henderson", "Barnes",
  "Gonzales", "Fisher", "Vasquez", "Simmons", "Romero", "Jordan", "Patterson", "Alexander", "Hamilton", "Graham",
  "Reynolds", "Griffin", "Wallace", "Moreno", "West", "Cole", "Hayes", "Bryant", "Herrera", "Gibson",
  "Ellis", "Tran", "Medina", "Aguilar", "Stevens", "Murray", "Ford", "Castro", "Marshall", "Owens",
  "Harrison", "Fernandez", "McDonald", "Woods", "Washington", "Kennedy", "Wells", "Vargas", "Henry", "Chen",
  "Freeman", "Webb", "Tucker", "Guzman", "Burns", "Crawford", "Olson", "Simpson", "Porter", "Hunter",
  "Gordon", "Mendez", "Silva", "Shaw", "Snyder", "Mason", "Dixon", "Munoz", "Hunt", "Hicks",
  "Holmes", "Palmer", "Wagner", "Black", "Robertson", "Boyd", "Rose", "Stone", "Salazar", "Fox",
  "Warren", "Mills", "Meyer", "Rice", "Schmidt", "Garza", "Daniels", "Ferguson", "Nichols", "Stephens",
  "Soto", "Weaver", "Ryan", "Gardner", "Payne", "Grant", "Dunn", "Kelley", "Spencer", "Hawkins",
  "Moyo", "Ncube", "Dube", "Sibanda", "Ndlovu", "Chirwa", "Mupfumi", "Gumbo", "Chikomo", "Mutasa",
  "Mhlanga", "Nkomo", "Sithole", "Chigumba", "Makoni", "Zimunya", "Chimuka", "Mafu", "Bhebhe", "Tshuma",
  "Molefe", "Khumalo", "Nkosi", "Zulu", "Dlamini", "Ndaba", "Mthembu", "Cele", "Buthelezi", "Shabalala",
  "Okafor", "Eze", "Nwosu", "Obi", "Okonkwo", "Adeyemi", "Oluwaseun", "Balogun", "Adeleke", "Ogunleye",
  "Mensah", "Asante", "Owusu", "Boateng", "Agyeman", "Osei", "Quaye", "Amoah", "Frimpong", "Darko",
  "Odhiambo", "Omondi", "Otieno", "Ochieng", "Onyango", "Owino", "Oluoch", "Oduor", "Okoth", "Opiyo",
  "Bekele", "Tesfaye", "Haile", "Girma", "Tadesse", "Kebede", "Mekonnen", "Alemu", "Worku", "Desta",
  "Kamara", "Diallo", "Traore", "Keita", "Coulibaly", "Toure", "Diop", "Ndiaye", "Sow", "Ba",
];

const countries = [
  // Zimbabwe - heavily weighted
  "Zimbabwe", "Zimbabwe", "Zimbabwe", "Zimbabwe", "Zimbabwe", "Zimbabwe", "Zimbabwe", "Zimbabwe", "Zimbabwe", "Zimbabwe",
  "Zimbabwe", "Zimbabwe", "Zimbabwe", "Zimbabwe", "Zimbabwe", "Zimbabwe", "Zimbabwe", "Zimbabwe",
  // Other African countries - weighted
  "South Africa", "South Africa", "South Africa", "South Africa", "South Africa", "South Africa",
  "Nigeria", "Nigeria", "Nigeria", "Nigeria", "Nigeria", "Nigeria",
  "Kenya", "Kenya", "Kenya", "Kenya", "Kenya",
  "Ghana", "Ghana", "Ghana", "Ghana",
  "Zambia", "Zambia", "Zambia",
  "Botswana", "Botswana", "Botswana",
  "Tanzania", "Tanzania", "Tanzania",
  "Uganda", "Uganda", "Uganda",
  "Rwanda", "Rwanda",
  "Ethiopia", "Ethiopia",
  "Egypt", "Egypt",
  "Morocco", "Morocco",
  "Malawi", "Malawi",
  "Mozambique", "Mozambique",
  "Namibia", "Namibia",
  "Cameroon", "Cameroon",
  "Senegal", "Senegal",
  "Ivory Coast", "Ivory Coast",
  "Tunisia",
  "Algeria",
  "Democratic Republic of Congo",
  "Angola",
  "Mauritius",
  // Non-African (fewer)
  "United Kingdom", "United Kingdom",
  "United States", "United States",
  "Australia",
  "Canada",
  "India", "India",
  "Pakistan",
  "Philippines",
  "Indonesia",
  "Malaysia",
  "Brazil",
  "Mexico",
  "Germany",
  "France",
  "Netherlands",
  "Sweden",
  "Norway",
  "New Zealand",
  "Singapore",
  "United Arab Emirates",
];

// Seeded pseudo-random for consistent data
function seededRandom(seed: number): number {
  const x = Math.sin(seed * 9301 + 49297) * 233280;
  return x - Math.floor(x);
}

function maskName(name: string): string {
  if (name.length <= 2) return name[0] + "***";
  return name[0] + "***" + name[name.length - 1];
}

// Generate 3000 dummy registrations
const registrations: { name: string; country: string }[] = [];
for (let i = 0; i < 3000; i++) {
  const fn = firstNames[Math.floor(seededRandom(i * 3 + 1) * firstNames.length)];
  const ln = lastNames[Math.floor(seededRandom(i * 7 + 2) * lastNames.length)];
  const country = countries[Math.floor(seededRandom(i * 13 + 3) * countries.length)];
  registrations.push({
    name: `${maskName(fn)} ${maskName(ln)}`,
    country,
  });
}

export function RegistrationPopups() {
  const [current, setCurrent] = useState<{ name: string; country: string } | null>(null);
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (window.sessionStorage.getItem("sp_popups_dismissed") === "1") {
      setDismissed(true);
    }
  }, []);

  useEffect(() => {
    if (dismissed) return;

    let hideTimer: number | undefined;

    const showNext = () => {
      const next = registrations[Math.floor(Math.random() * registrations.length)];
      setCurrent(next);
      setVisible(true);
      window.clearTimeout(hideTimer);
      hideTimer = window.setTimeout(() => setVisible(false), 5200);
    };

    const first = window.setTimeout(showNext, 8000);
    const interval = window.setInterval(showNext, 30000);

    return () => {
      window.clearTimeout(first);
      window.clearInterval(interval);
      window.clearTimeout(hideTimer);
    };
  }, [dismissed]);

  if (!current || dismissed) return null;

  return (
    <div
      className={`fixed bottom-4 left-4 z-50 w-[calc(100%-2rem)] max-w-sm transition-all duration-500 sm:bottom-6 sm:left-6 ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <div className="glass flex items-start gap-3 rounded-2xl px-4 py-3.5">
        <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 ring-1 ring-emerald-100">
          <CheckCircle2 className="size-4" strokeWidth={2.2} />
        </span>
        <div className="min-w-0 flex-1">
          <p className="text-[12.5px] font-semibold text-[#0b0b12]">
            {current.name}
          </p>
          <p className="mt-0.5 text-[11px] leading-relaxed text-[#5b5f70]">
            from {current.country} just joined early access
          </p>
        </div>
        <button
          type="button"
          onClick={() => {
            setDismissed(true);
            window.sessionStorage.setItem("sp_popups_dismissed", "1");
          }}
          className="shrink-0 rounded-full p-1 text-[#a3a7b7] transition-colors hover:bg-[#0b0b12]/[0.04] hover:text-[#0b0b12]"
          aria-label="Dismiss notifications"
        >
          <X className="size-3.5" />
        </button>
      </div>
    </div>
  );
}
