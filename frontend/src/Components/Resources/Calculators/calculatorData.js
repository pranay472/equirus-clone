import { 
  TrendingUp, 
  PiggyBank, 
  Landmark, 
  Wallet, 
  Repeat, 
  Calculator, 
  Calendar, 
  Clock,
  Rocket,
  Sigma,
  Users,
  Book,
  Heart,
  Target,
  Car,
  Home,
  Globe
} from 'lucide-react';

export const calculatorData = [
  {
    id: 'cagr',
    title: 'CAGR Tracker',
    description: 'Track Your Wealth Growth with CAGR Calculator',
    Icon: TrendingUp,
    category: 'Investment',
    path: '/resources/calculators/cagr'
  },
  {
    id: 'compound-interest',
    title: 'Compound Interest Tool',
    description: "Boost Savings with Compound Interest Calculator",
    Icon: PiggyBank,
    category: 'Investment',
    path: '/resources/calculators/compound-interest'
  },
  {
    id: 'fd',
    title: 'FD Returns Estimator',
    description: 'Maximise FD Returns with Fixed Deposit Calculator',
    Icon: Landmark,
    category: 'Investment',
    path: '/resources/calculators/fd'
  },
  {
    id: 'ppf',
    title: 'PPF Planner',
    description: 'Secure Your Future with PPF Calculator',
    Icon: Wallet,
    category: 'Investment',
    path: '/resources/calculators/ppf'
  },
  {
    id: 'rd',
    title: 'Recurring Deposit Planner',
    description: 'Save Consistently with Recurring Deposit Calculator',
    Icon: Repeat,
    category: 'Investment',
    path: '/resources/calculators/rd'
  },
  {
    id: 'simple-interest',
    title: 'Simple Interest',
    description: 'Know your Payment Plan',
    Icon: Calculator,
    category: 'Investment',
    path: '/resources/calculators/simple-interest'
  },
  {
    id: 'sip',
    title: 'SIP',
    description: 'Calculate how much you can make if you invest a fixed amount per month for "n" years',
    Icon: Calendar,
    category: 'Investment',
    path: '/resources/calculators/sip'
  },
  {
    id: 'sip-delay',
    title: 'SIP Delay Cost',
    description: 'Calculate how much you would potentially lose if you delay your SIP by a few years',
    Icon: Clock,
    category: 'Investment',
    path: '/resources/calculators/sip-delay'
  },
  {
    id:'sip-growth',
    title:'SIP Growth Calculator',
    description:'Calculate the growth of your SIP over time',
    Icon: Rocket,
    category:'Investment',
    path:'/resources/calculators/sip-growth'
  },
  {
    id:'weighted-average-returns',
    title:'Weighted Average Returns',
    description:'Calculate the weighted average returns of your investments',
    Icon: Sigma,
    category:'Investment',
    path:'/resources/calculators/weighted-returns'
  },
  {
    id: 'mutual-fund',
    title: 'Mutual Fund Calculator',
    description: 'Calculate returns and growth of your mutual fund investments',
    Icon: TrendingUp,
    category: 'Investment',
    path: '/resources/calculators/mutual-fund'
  },
  {
    id: 'elss',
    title: 'ELSS Calculator',
    description: 'Calculate returns on tax-saving ELSS mutual fund investments',
    Icon: Calculator,
    category: 'Investment',
    path: '/resources/calculators/elss'
  },
  {
    id: 'nps',
    title: 'NPS Calculator',
    description: 'Calculate returns on National Pension System investments',
    Icon: PiggyBank,
    category: 'Investment',
    path: '/resources/calculators/nps'
  },
  {
    id: 'lumpsum-investment',
    title: 'Lumpsum Investment Calculator',
    description: 'Calculate returns on one-time investment amounts',
    Icon: Wallet,
    category: 'Investment',
    path: '/resources/calculators/lumpsum-investment'
  },
  {
    id: 'swp',
    title: 'SWP Calculator',
    description: 'Calculate Systematic Withdrawal Plan returns',
    Icon: Repeat,
    category: 'Investment',
    path: '/resources/calculators/swp'
  },
  {
    id: 'future-value',
    title: 'Future Value Calculator',
    description: 'Calculate the future value of your investments',
    Icon: Target,
    category: 'Investment',
    path: '/resources/calculators/future-value'
  },
  {
    id:'custom-goal',
    title:'Custom Goal Tracker',
    description:'Achieve Any Financial Goals with Custom Goal Calculator',
    Icon: Target,
    category:'Investment',
    path:'/resources/calculators/custom-goals'
  },
  {
    id:'aging-parents',
    title:'Aging Parents',
    description:'Calculate how much you need to secure for your aging parents',
    Icon: Users,
    category:'Family',
    path:'/resources/calculators/aging-parents'
  },
  {
    id:'child-education',
    title:'Child Education',
    description:'Calculate how much you need to secure for your child\'s education',
    Icon: Book,
    category:'Family',
    path:'/resources/calculators/child-education'
  },
  {
    id:'child-marriage',
    title:'Child Marriage',
    description:'Calculate how much you need to secure for your child\'s marriage',
    Icon: Heart,
    category:'Family',
    path:'/resources/calculators/child-marriage'
  },
  {
    id:'travel-budget',
    title:'Travel Budget Calculator',
    description:'Plan travel budgets with this calculator',
    Icon: Globe,
    category:'Goals',
    path:'/resources/calculators/travel-budget'
  },
  {
    id:'wedding-budget',
    title:'Wedding Budget Planner',
    description:'Break down wedding costs with this calculator',
    Icon: Heart,
    category:'Goals',
    path:'/resources/calculators/wedding-budget'
  },
  {
    id:'home-renovation-budget',
    title:'Home Renovation Budget Planner',
    description:'Calculate renovation costs with this calculator.',
    Icon: Landmark,
    category:'Goals',
    path:'/resources/calculators/home-renovation-budget'
  },
  {
    id:'dream-wedding',
    title:'Dream Wedding Fund',
    description:'Plan a memorable wedding with Dream Wedding Fund Calculator',
    Icon: Heart,
    category:'Goals',
    path:'/resources/calculators/dream-wedding' 
  },
  {id:'first-car',
    title:'First Car Planner',
    description:'Get moving with First Car Calculator',
    Icon: Car,
    category:'Goals',
    path:'/resources/calculators/first-car'
  },
  {
    id:'first-crore-goal',
    title:'First Crore Goal',
    description:'Become a Crorepati with First Crore Goal Calculator',  
    Icon: Target,
    category:'Goals',
    path:'/resources/calculators/first-crore'
  },
  {
    id:'home-goal',
    title:'Home Purchase Planner',
    description:'Secure your dream home with Home Goal Calculator',
    Icon: Home,
    category:'Goals',
    path:'/resources/calculators/home-goal'
  },
  {
    id:'overseas-vacation',
    title:'Vacation Goal Planner',
    description:'Become a Jetsetter with Overseas Vacation Goal Calculator',
    Icon: Globe,
    category:'Goals',
    path:'/resources/calculators/overseas-vacation'
  },
  {
    id:'recurring-world-tour',
    title:'Recurring Vacation Fund',
    description:'Become a Frequent Flying Jetsetter with Recurring Vacation Goal Calculator',
    Icon: Target,
    category:'Goals',
    path:'/resources/calculators/recurring-world-tour'
  },
  {
    id: 'car-loan-emi',
    title: 'Car Loan EMI',
    description: 'Calculate your monthly EMI for car loan',
    Icon: PiggyBank,
    category: 'Loan',
    path: '/resources/calculators/car-loan-emi'
  },
  {
    id: 'emi',
    title: 'EMI',
    description: 'Calculate Equated Monthly Installments for your loan',
    Icon: Sigma,
    category: 'Loan',
    path: '/resources/calculators/emi'
  },
  {
    id: 'home-loan-emi',
    title: 'Home Loan EMI',
    description: 'Calculate your monthly EMI for home loan',
    Icon: Landmark,
    category: 'Loan',
    path: '/resources/calculators/home-loan-emi'
  },
  {
    id: 'personal-loan-emi',
    title: 'Personal Loan EMI',
    description: 'Calculate your monthly EMI for personal loan',
    Icon: Users,
    category: 'Loan',
    path: '/resources/calculators/personal-loan-emi'
  },
  {
    id: 'education-loan-emi',
    title: 'Education Loan EMI',
    description: 'Calculate your monthly EMI for education loan',
    Icon: Target,
    category: 'Loan',
    path: '/resources/calculators/education-loan-emi'
  },
  {
    id: 'home-extension-loan',
    title: 'Home Extension/Renovation Loan Calculator',
    description: 'Calculate loan EMI for your home renovation or extension',
    Icon: Rocket,
    category: 'Loan',
    path: '/resources/calculators/home-extension-loan'
  },
  {
    id: 'land-construction-loan',
    title: 'Land Construction Loan Calculator',
    description: 'Calculate loan EMI for land construction',
    Icon: Globe,
    category: 'Loan',
    path: '/resources/calculators/land-construction-loan'
  },
  {
    id: 'marriage-loan',
    title: 'Marriage Loan Calculator',
    description: 'Calculate loan EMI for marriage expenses',
    Icon: Calendar,
    category: 'Loan',
    path: '/resources/calculators/marriage-loan'
  },
  {
    id: 'epf-calculator',
    title: 'EPF Calculator',
    description: 'Calculate your Employee Provident Fund returns',
    Icon: PiggyBank,
    category: 'Miscellaneous',
    path: '/resources/calculators/epf'
  },
  {
    id: 'inflation',
    title: 'Inflation',
    description: 'Calculate the impact of inflation on your money',
    Icon: TrendingUp,
    category: 'Miscellaneous',
    path: '/resources/calculators/inflation'
  },
  {
    id: 'irregular-cash-flow',
    title: 'Irregular Cash Flow',
    description: 'Calculate returns for irregular cash flow investments',
    Icon: Repeat,
    category: 'Miscellaneous',
    path: '/resources/calculators/irregular-cash-flow'
  },
  {
    id: 'single-amount',
    title: 'Single Amount',
    description: 'Calculate returns for one-time investments',
    Icon: Wallet,
    category: 'Miscellaneous',
    path: '/resources/calculators/single-amount'
  },
  {
    id: 'gratuity',
    title: 'Gratuity Calculator',
    description: 'Calculate your gratuity amount',
    Icon: Calculator,
    category: 'Miscellaneous',
    path: '/resources/calculators/gratuity'
  },
  {
    id: 'brokerage',
    title: 'Brokerage Calculator',
    description: 'Calculate brokerage charges for your trades',
    Icon: Landmark,
    category: 'Miscellaneous',
    path: '/resources/calculators/brokerage'
  },
  {
    id: 'margin',
    title: 'Margin Calculator',
    description: 'Calculate trading margin requirements',
    Icon: Sigma,
    category: 'Miscellaneous',
    path: '/resources/calculators/margin'
  },
  {
    id: 'option-value',
    title: 'Option Value Calculator',
    description: 'Calculate option values and premiums',
    Icon: Target,
    category: 'Miscellaneous',
    path: '/resources/calculators/option-value'
  },
  {
    id: 'ebidta-margin',
    title: 'EBIDTA Margin Calculator',
    description: 'Calculate Earnings Before Interest, Depreciation, Taxes, and Amortization margin',
    Icon: Calculator,
    category: 'Miscellaneous',
    path: '/resources/calculators/ebidta-margin'
  },
  {
    id: 'rental-yield',
    title: 'Rental Yield Calculator',
    description: 'Calculate the yield from your rental property',
    Icon: Home,
    category: 'Miscellaneous',
    path: '/resources/calculators/rental-yield'
  },
  {
    id: 'sukanya-samriddhi',
    title: 'Sukanya Samruddi Yojana',
    description: 'Calculate returns from Sukanya Samriddhi Yojana investment',
    Icon: Heart,
    category: 'Miscellaneous',
    path: '/resources/calculators/sukanya-samriddhi'
  },
  {
    id: 'fund-switch',
    title: 'Moving from poor funds to better funds',
    description: 'Calculate the benefit of switching from underperforming to better performing funds',
    Icon: Repeat,
    category: 'Miscellaneous',
    path: '/resources/calculators/fund-switch'
  },
  {
    id: 'retirement-plan',
    title: 'Retirement Plan Calculator',
    description: 'Plan your retirement savings and estimate your retirement corpus',
    Icon: Target,
    category: 'Retirement',
    path: '/resources/calculators/retirement-plan'
  },
  {
    id: 'superannuation',
    title: 'Superannuation',
    description: 'Calculate your superannuation benefits and retirement savings',
    Icon: PiggyBank,
    category: 'Retirement',
    path: '/resources/calculators/superannuation'
  },
  {
    id: 'fire',
    title: 'Achieve early/fire retirement',
    description: 'Plan your path to financial independence and early retirement',
    Icon: Rocket,
    category: 'Retirement',
    path: '/resources/calculators/fire'
  },
  {
    id: 'nps-reinvestment',
    title: 'NPS Reinvestment in annuity',
    description: 'Calculate returns on NPS reinvestment in annuity schemes',
    Icon: Repeat,
    category: 'Retirement',
    path: '/resources/calculators/nps-reinvestment'
  }
];
