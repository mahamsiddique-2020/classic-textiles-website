import cottonFabric from '../assets/images/cotton fabric.jpg';
import bedsheets from '../assets/images/bedsheets.png';
import curtains from '../assets/images/curtains.png';
import kitchen from '../assets/images/kitchen.png';
import mattress from '../assets/images/mattress.png';
import towels from '../assets/images/towels.png';
import hospital from '../assets/images/hospital.jpg';

export const categories = [
  'All',
  'Fabric',
  'Bedding',
  'Hospitality',
  'Window Curtains',
  'Kitchen & Table Linen',
  'Waterproof Mattress Protector',
  'Towel',
  'Healthcare Textiles'
];

export const products = [
  {
    id: 'prod-1',
    slug: 'greige-dyed-woven-fabrics',
    productName: 'Premium Greige & Dyed Fabrics',
    category: 'Fabric',
    shortDescription: 'High-density cotton, PC, and CVC woven fabrics in poplin, twill, satin, and duck weaves.',
    composition: '100% Cotton, Poly-Cotton, CVC',
    image: cottonFabric,
    specs: ['Thread Count: 100 - 400 TC', 'Width: 36 inch to 130 inch', 'Custom Reactive & Disperse Dyeing']
  },
  {
    id: 'prod-2',
    slug: 'luxury-bedding-sets',
    productName: 'Luxury Bedding & Sheet Sets',
    category: 'Bedding',
    shortDescription: 'Crisp percale and silky sateen sheet sets, duvet covers, pillow shams, and fitted sheets.',
    composition: '100% Combed Cotton, Microfiber',
    image: bedsheets,
    specs: ['Thread Count: 200 - 1000 TC', 'Pigment, Panel & Disperse Printing', 'Institutional & Retail Pack']
  },
  {
    id: 'prod-3',
    slug: 'commercial-hotel-linen',
    productName: 'Commercial Hotel Linen',
    category: 'Hospitality',
    shortDescription: 'Heavy-duty institutional hotel sheets, duvet inserts, bathrobes, and high-tensile table covers.',
    composition: '80/20 Cotton-Poly, 100% Cotton Vat Dyed',
    image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=800&q=80',
    specs: ['Industrial Chlorine Wash Durable', 'Double Needle Stitched Margins', 'High Tensile & Tear Strength']
  },
  {
    id: 'prod-4',
    slug: 'blackout-window-curtains',
    productName: 'Thermal Blackout Window Curtains',
    category: 'Window Curtains',
    shortDescription: 'Light-blocking thermal insulation curtains, sheer drapes, velvet panels, and jacquards.',
    composition: '100% Polyester Jacquard & Velvet',
    image: curtains,
    specs: ['100% Blackout Coating', 'Stainless Eyelet & Grommet Tops', 'Custom Drop Heights']
  },
  {
    id: 'prod-5',
    slug: 'kitchen-table-linen',
    productName: 'Kitchen & Table Linen',
    category: 'Kitchen & Table Linen',
    shortDescription: 'Stain-resistant tablecloths, cloth napkins, chef aprons, tea towels, and placemats.',
    composition: '100% Cotton Woven, PC Twill',
    image: kitchen,
    specs: ['Water & Oil Repellent Treatment', 'Hemstitched Margins', 'Yarn Dyed Checks & Stripes']
  },
  {
    id: 'prod-6',
    slug: 'waterproof-mattress-protector',
    productName: 'Waterproof Mattress Protector',
    category: 'Waterproof Mattress Protector',
    shortDescription: 'Hypoallergenic TPU waterproof membrane mattress encasements and fitted skirt protectors.',
    composition: 'Terry Cotton Surface + TPU Layer',
    image: mattress,
    specs: ['Noise-free TPU Membrane', 'Fits Mattresses up to 40cm', 'Dust Mite & Fluid Barrier']
  },
  {
    id: 'prod-7',
    slug: 'combed-cotton-towels',
    productName: 'Ring-Spun Terry Towels',
    category: 'Towel',
    shortDescription: 'Ultra-absorbent combed cotton bath towels, hand towels, face washers, and hotel bath sheets.',
    composition: '100% Ring Spun Cotton',
    image: towels,
    specs: ['Weight: 450 - 700 GSM', 'Dobby & Cam Header Borders', 'Fast Dye Color Retain']
  },
  {
    id: 'prod-8',
    slug: 'medical-healthcare-textiles',
    productName: 'Medical Grade Healthcare Textiles',
    category: 'Healthcare Textiles',
    shortDescription: 'Autoclave-safe hospital bed sheets, surgical drapes, barrier fabrics, and patient gowns.',
    composition: 'Antimicrobial CVC & Poly-Cotton',
    image: hospital,
    specs: ['Antimicrobial Finish', 'Fluid Resistant Coating', 'High Temp Wash Resistant']
  }
];