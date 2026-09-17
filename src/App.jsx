import { useState } from 'react';
import {
  ArrowRight,
  MapPinned,
  MapPin,
  Compass,
  Clock,
  Globe,
  Trees,
  Shield,
  ShieldAlert,
  Users,
  Calendar,
  Star,
  CheckCircle2,
  Mail,
} from 'lucide-react';
import {
  PROVINCES_DATA,
  PROVINCE_STATS,
  WILDLIFE_DATA,
  PARKS_DATA,
  PARK_STATS,
} from './data/mockData';
import './App.css';

// === ТОЧНЫЙ КОМПОНЕНТ ВАШЕГО ЛОГОТИПА ИЗ FIGMA ===
function StillWildsLogo({
  width = 210,
  height = 120,
  color = "#FFFFFF",
  background = "transparent",
  className = "",
}) {
  return (
    <div
      className={className}
      style={{
        display: "inline-flex",
        background,
        alignItems: "center",
      }}
    >
      <svg
        width={width}
        height={height}
        viewBox="0 0 277 169"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M55.036 73.0488C55.42 73.0488 55.828 73.0728 56.26 73.1208C56.716 73.1688 57.148 73.2408 57.556 73.3368C57.988 73.4088 58.372 73.4928 58.708 73.5888C59.068 73.6608 59.344 73.7448 59.536 73.8408V77.8368H59.212C59.212 76.6848 58.816 75.7848 58.024 75.1368C57.232 74.4648 56.272 74.1288 55.144 74.1288C53.824 74.1288 52.756 74.5488 51.94 75.3888C51.124 76.2048 50.716 77.1648 50.716 78.2688C50.716 78.7248 50.812 79.2648 51.004 79.8888C51.22 80.4888 51.604 81.0528 52.156 81.5808L59.248 88.1328C59.968 88.8048 60.448 89.5248 60.688 90.2928C60.928 91.0608 61.048 91.8048 61.048 92.5248C61.048 94.5168 60.436 96.1368 59.212 97.3848C58.012 98.6328 56.38 99.2568 54.316 99.2568C53.74 99.2568 53.056 99.1968 52.264 99.0768C51.496 98.9568 50.74 98.7528 49.996 98.4648C49.276 98.1528 48.676 97.7568 48.196 97.2768C48.124 96.8928 48.088 96.4128 48.088 95.8368C48.088 95.2608 48.136 94.6608 48.232 94.0368C48.328 93.3888 48.46 92.8008 48.628 92.2728H48.952C48.832 93.4968 48.988 94.5648 49.42 95.4768C49.852 96.3888 50.476 97.0848 51.292 97.5648C52.132 98.0208 53.08 98.2248 54.136 98.1768C55.456 98.1048 56.584 97.6488 57.52 96.8088C58.48 95.9448 58.96 94.7928 58.96 93.3528C58.96 92.6568 58.84 92.0328 58.6 91.4808C58.36 90.9048 58.012 90.4128 57.556 90.0048L50.644 83.5968C49.924 82.9248 49.42 82.1928 49.132 81.4008C48.844 80.5848 48.7 79.8288 48.7 79.1328C48.7 78.1248 48.94 77.1528 49.42 76.2168C49.9 75.2808 50.608 74.5248 51.544 73.9488C52.504 73.3488 53.668 73.0488 55.036 73.0488ZM59.536 73.4088V74.1648H56.8V73.4088H59.536ZM74.6779 77.2608V98.7528H72.3379V77.2608H74.6779ZM83.3899 77.1168V78.1968H63.6259V77.1168H83.3899ZM83.3899 78.1248V80.6088H82.9939V80.0328C82.9939 79.5288 82.8259 79.1088 82.4899 78.7728C82.1779 78.4128 81.7459 78.2208 81.1939 78.1968V78.1248H83.3899ZM83.3899 76.5408V77.4768L79.3579 77.1168C79.8379 77.1168 80.3419 77.0928 80.8699 77.0448C81.4219 76.9728 81.9259 76.8888 82.3819 76.7928C82.8379 76.6968 83.1739 76.6128 83.3899 76.5408ZM72.4099 96.4488V98.7528H69.7819V98.3928C69.8059 98.3928 69.8779 98.3928 69.9979 98.3928C70.1419 98.3928 70.2139 98.3928 70.2139 98.3928C70.7899 98.3928 71.2819 98.2008 71.6899 97.8168C72.0979 97.4328 72.3139 96.9768 72.3379 96.4488H72.4099ZM74.5699 96.4488H74.6779C74.7019 96.9768 74.9179 97.4328 75.3259 97.8168C75.7339 98.2008 76.2259 98.3928 76.8019 98.3928C76.8019 98.3928 76.8619 98.3928 76.9819 98.3928C77.1259 98.3928 77.1979 98.3928 77.1979 98.3928V98.7528H74.5699V96.4488ZM65.8219 78.1248V78.1968C65.2699 78.2208 64.8259 78.4128 64.4899 78.7728C64.1779 79.1088 64.0219 79.5288 64.0219 80.0328V80.6088H63.6259V78.1248H65.8219ZM63.6259 76.5408C63.8419 76.6128 64.1659 76.6968 64.5979 76.7928C65.0539 76.8888 65.5579 76.9728 66.1099 77.0448C66.6619 77.0928 67.1779 77.1168 67.6579 77.1168L63.6259 77.4768V76.5408ZM91.0984 77.1528V98.7528H88.8304V77.1528H91.0984ZM88.9384 96.4488V98.7528H85.8784V98.3928C85.8784 98.3928 85.9624 98.3928 86.1304 98.3928C86.2984 98.3928 86.3824 98.3928 86.3824 98.3928C87.0544 98.3928 87.6184 98.2008 88.0744 97.8168C88.5544 97.4328 88.8064 96.9768 88.8304 96.4488H88.9384ZM90.9904 96.4488H91.0984C91.1224 96.9768 91.3624 97.4328 91.8184 97.8168C92.2984 98.2008 92.8744 98.3928 93.5464 98.3928C93.5464 98.3928 93.6184 98.3928 93.7624 98.3928C93.9304 98.3928 94.0144 98.3928 94.0144 98.3928L94.0504 98.7528H90.9904V96.4488ZM90.9904 79.4568V77.1528H94.0504L94.0144 77.5128C94.0144 77.5128 93.9304 77.5128 93.7624 77.5128C93.6184 77.5128 93.5464 77.5128 93.5464 77.5128C92.8744 77.5128 92.2984 77.7048 91.8184 78.0888C91.3624 78.4488 91.1224 78.9048 91.0984 79.4568H90.9904ZM88.9384 79.4568H88.8304C88.8064 78.9048 88.5544 78.4488 88.0744 78.0888C87.6184 77.7048 87.0544 77.5128 86.3824 77.5128C86.3584 77.5128 86.2624 77.5128 86.0944 77.5128C85.9504 77.5128 85.8784 77.5128 85.8784 77.5128V77.1528H88.9384V79.4568ZM102.868 77.1528V98.7528H100.564V77.1528H102.868ZM112.552 97.6368L112.48 98.7528H102.796V97.6368H112.552ZM114.568 93.6048L112.588 98.7528H107.116L108.34 97.6368C109.54 97.6368 110.5 97.4688 111.22 97.1328C111.964 96.7728 112.564 96.2928 113.02 95.6928C113.476 95.0688 113.872 94.3728 114.208 93.6048H114.568ZM100.636 96.4488L101.104 98.7528H97.9722V98.3928C97.9722 98.3928 98.0562 98.3928 98.2242 98.3928C98.3922 98.3928 98.4762 98.3928 98.4762 98.3928C99.0762 98.3928 99.5682 98.2008 99.9522 97.8168C100.336 97.4328 100.54 96.9768 100.564 96.4488H100.636ZM102.76 79.4568V77.1528H105.424V77.5128C105.424 77.5128 105.352 77.5128 105.208 77.5128C105.064 77.5128 104.992 77.5128 104.992 77.5128C104.416 77.5128 103.912 77.7048 103.48 78.0888C103.072 78.4488 102.868 78.9048 102.868 79.4568H102.76ZM100.636 79.4568H100.564C100.54 78.9048 100.324 78.4488 99.9162 78.0888C99.5082 77.7048 99.0042 77.5128 98.4042 77.5128C98.4042 77.5128 98.3322 77.5128 98.1882 77.5128C98.0442 77.5128 97.9722 77.5128 97.9722 77.5128V77.1528H100.636V79.4568ZM121.29 77.1528V98.7528H118.986V77.1528H121.29ZM130.974 97.6368L130.902 98.7528H121.218V97.6368H130.974ZM132.99 93.6048L131.01 98.7528H125.538L126.762 97.6368C127.962 97.6368 128.922 97.4688 129.642 97.1328C130.386 96.7728 130.986 96.2928 131.442 95.6928C131.898 95.0688 132.294 94.3728 132.63 93.6048H132.99ZM119.058 96.4488L119.526 98.7528H116.394V98.3928C116.394 98.3928 116.478 98.3928 116.646 98.3928C116.814 98.3928 116.898 98.3928 116.898 98.3928C117.498 98.3928 117.99 98.2008 118.374 97.8168C118.758 97.4328 118.962 96.9768 118.986 96.4488H119.058ZM121.182 79.4568V77.1528H123.846V77.5128C123.846 77.5128 123.774 77.5128 123.63 77.5128C123.486 77.5128 123.414 77.5128 123.414 77.5128C122.838 77.5128 122.334 77.7048 121.902 78.0888C121.494 78.4488 121.29 78.9048 121.29 79.4568H121.182ZM119.058 79.4568H118.986C118.962 78.9048 118.746 78.4488 118.338 78.0888C117.93 77.7048 117.426 77.5128 116.826 77.5128C116.826 77.5128 116.754 77.5128 116.61 77.5128C116.466 77.5128 116.394 77.5128 116.394 77.5128V77.1528H119.058V79.4568ZM135.047 73.7688H140.915L146.675 90.0408L144.515 99.4008L135.047 73.7688ZM153.047 72.9768L153.695 76.5408L145.703 95.4048C145.703 95.4048 145.631 95.6088 145.487 96.0168C145.343 96.4248 145.199 96.9288 145.055 97.5288C144.935 98.1288 144.863 98.7528 144.839 99.4008H144.515L143.507 95.1168L152.723 72.9768H153.047ZM153.047 73.0128L160.967 90.5088L159.239 99.4008L150.563 80.2128L153.047 73.0128ZM166.979 73.7688L160.211 95.4048C160.211 95.4048 160.151 95.6208 160.031 96.0528C159.911 96.4608 159.803 96.9768 159.707 97.6008C159.611 98.2008 159.575 98.8008 159.599 99.4008H159.239L158.231 95.8368L164.531 73.7688H166.979ZM163.847 76.1448C164.039 75.4248 163.979 74.8728 163.667 74.4888C163.355 74.1048 162.959 73.9128 162.479 73.9128H162.155V73.5528H169.679V73.9128C169.679 73.9128 169.631 73.9128 169.535 73.9128C169.439 73.9128 169.391 73.9128 169.391 73.9128C168.839 73.9128 168.239 74.0928 167.591 74.4528C166.943 74.7888 166.487 75.3528 166.223 76.1448H163.847ZM141.815 76.1448H135.947C135.635 75.3528 135.167 74.7888 134.543 74.4528C133.919 74.0928 133.331 73.9128 132.779 73.9128C132.779 73.9128 132.731 73.9128 132.635 73.9128C132.539 73.9128 132.491 73.9128 132.491 73.9128V73.5528H143.471V73.9128H143.147C142.691 73.9128 142.283 74.1048 141.923 74.4888C141.587 74.8728 141.551 75.4248 141.815 76.1448ZM177.166 77.1528V98.7528H171.982V77.1528H177.166ZM172.09 96.4848V98.7528H169.462V98.3928C169.462 98.3928 169.534 98.3928 169.678 98.3928C169.822 98.3928 169.906 98.3928 169.93 98.3928C170.482 98.3928 170.962 98.2128 171.37 97.8528C171.778 97.4688 171.982 97.0128 171.982 96.4848H172.09ZM177.094 96.4848H177.166C177.19 97.0128 177.394 97.4688 177.778 97.8528C178.186 98.2128 178.678 98.3928 179.254 98.3928C179.254 98.3928 179.314 98.3928 179.434 98.3928C179.578 98.3928 179.662 98.3928 179.686 98.3928V98.7528H177.094V96.4848ZM177.094 79.4208V77.1528H179.686L179.65 77.5128C179.65 77.5128 179.59 77.5128 179.47 77.5128C179.35 77.5128 179.278 77.5128 179.254 77.5128C178.678 77.5128 178.186 77.6928 177.778 78.0528C177.394 78.4128 177.19 78.8688 177.166 79.4208H177.094ZM172.09 79.4208H171.982C171.982 78.8688 171.778 78.4128 171.37 78.0528C170.962 77.6928 170.47 77.5128 169.894 77.5128C169.894 77.5128 169.822 77.5128 169.678 77.5128C169.534 77.5128 169.462 77.5128 169.462 77.5128V77.1528H172.09V79.4208ZM189.504 77.1528V98.7528H184.32V77.1528H189.504ZM197.892 97.3128L198.756 98.7528H189.432V97.3128H197.892ZM200.268 92.1288L198.864 98.7528H192.636L193.752 97.3128C194.784 97.3128 195.696 97.1088 196.488 96.7008C197.304 96.2688 198 95.6688 198.576 94.9008C199.152 94.1088 199.596 93.1848 199.908 92.1288H200.268ZM184.392 96.4848L184.572 98.7528H181.908V98.3928C181.908 98.3928 181.98 98.3928 182.124 98.3928C182.268 98.3928 182.352 98.3928 182.376 98.3928C182.904 98.3928 183.348 98.2128 183.708 97.8528C184.092 97.4688 184.296 97.0128 184.32 96.4848H184.392ZM189.432 79.4208V77.1528H191.916V77.5128C191.892 77.5128 191.808 77.5128 191.664 77.5128C191.544 77.5128 191.484 77.5128 191.484 77.5128C190.956 77.5128 190.5 77.6928 190.116 78.0528C189.732 78.4128 189.528 78.8688 189.504 79.4208H189.432ZM184.392 79.4208H184.32C184.296 78.8688 184.092 78.4128 183.708 78.0528C183.324 77.6928 182.868 77.5128 182.34 77.5128C182.316 77.5128 182.232 77.5128 182.088 77.5128C181.968 77.5128 181.908 77.5128 181.908 77.5128V77.1528H184.392V79.4208ZM213.446 77.1528C216.014 77.1528 218.222 77.5848 220.07 78.4488C221.918 79.2888 223.334 80.5248 224.318 82.1568C225.302 83.7648 225.794 85.6968 225.794 87.9528C225.794 90.2088 225.302 92.1408 224.318 93.7488C223.334 95.3568 221.918 96.5928 220.07 97.4568C218.222 98.3208 216.014 98.7528 213.446 98.7528H205.454L205.382 97.3128C207.206 97.3128 208.67 97.3128 209.774 97.3128C210.902 97.3128 211.718 97.3128 212.222 97.3128C212.75 97.3128 213.014 97.3128 213.014 97.3128C215.27 97.3128 217.046 96.4848 218.342 94.8288C219.638 93.1728 220.286 90.8808 220.286 87.9528C220.286 85.0248 219.638 82.7328 218.342 81.0768C217.046 79.3968 215.27 78.5568 213.014 78.5568C213.014 78.5568 212.75 78.5568 212.222 78.5568C211.694 78.5568 210.842 78.5568 209.666 78.5568C208.49 78.5568 206.942 78.5568 205.022 78.5568V77.1528H213.446ZM208.946 77.1528V98.7528H203.762V77.1528H208.946ZM203.87 96.4488V98.7528H201.278V98.3928C201.278 98.3928 201.35 98.3928 201.494 98.3928C201.638 98.3928 201.722 98.3928 201.746 98.3928C202.298 98.3928 202.766 98.2008 203.15 97.8168C203.558 97.4328 203.762 96.9768 203.762 96.4488H203.87ZM203.834 79.4208H203.762C203.738 78.8688 203.522 78.4128 203.114 78.0528C202.73 77.6928 202.262 77.5128 201.71 77.5128C201.71 77.5128 201.638 77.5128 201.494 77.5128C201.35 77.5128 201.278 77.5128 201.278 77.5128V77.1528H203.834V79.4208ZM235.693 76.6848C236.173 76.6848 236.749 76.7088 237.421 76.7568C238.117 76.8048 238.801 76.8648 239.473 76.9368C240.145 76.9848 240.733 77.0568 241.237 77.1528C241.765 77.2248 242.125 77.2968 242.317 77.3688L241.849 81.7608H241.525C241.525 80.6568 241.141 79.7808 240.373 79.1328C239.605 78.4848 238.501 78.1608 237.061 78.1608C235.909 78.1608 234.973 78.4128 234.253 78.9168C233.557 79.4208 233.185 80.0928 233.137 80.9328C233.089 81.3648 233.161 81.7608 233.353 82.1208C233.569 82.4568 233.857 82.7568 234.217 83.0208C234.601 83.2848 235.021 83.5488 235.477 83.8128L241.129 87.3048C242.089 87.7848 242.845 88.4808 243.397 89.3928C243.949 90.3048 244.189 91.4088 244.117 92.7048C244.045 94.0488 243.649 95.2128 242.929 96.1968C242.233 97.1808 241.261 97.9368 240.013 98.4648C238.789 98.9688 237.337 99.2208 235.657 99.2208C234.625 99.2208 233.665 99.1368 232.777 98.9688C231.889 98.8008 231.121 98.5728 230.473 98.2848C229.849 97.9968 229.369 97.6728 229.033 97.3128C228.841 96.8328 228.757 96.2568 228.781 95.5848C228.805 94.8888 228.913 94.2048 229.105 93.5328C229.297 92.8368 229.537 92.2608 229.825 91.8048H230.113C230.041 92.8848 230.233 93.8808 230.689 94.7928C231.169 95.7048 231.865 96.4368 232.777 96.9888C233.689 97.5168 234.781 97.7808 236.053 97.7808C237.445 97.7808 238.489 97.4568 239.185 96.8088C239.881 96.1608 240.229 95.4048 240.229 94.5408C240.229 93.8928 240.013 93.3168 239.581 92.8128C239.173 92.2848 238.489 91.7688 237.529 91.2648L232.417 88.0248C231.217 87.4008 230.341 86.5728 229.789 85.5408C229.261 84.5088 229.069 83.3808 229.213 82.1568C229.333 81.0048 229.669 80.0208 230.221 79.2048C230.797 78.3888 231.553 77.7648 232.489 77.3328C233.425 76.9008 234.493 76.6848 235.693 76.6848ZM242.317 77.0088L242.281 77.6568H238.429V77.0088H242.317Z"
          fill={color}
        />
        <path
          d="M147.713 24.9183L120.531 0.515396L54.0389 64.9598L79.9657 58.7556L92.4099 65.4937L121.719 36.0103L139.412 50.0846L182.933 10.1834L242.033 70.369L206.895 57.3091L193.459 66.8996L167.803 42.6576"
          stroke={color}
          strokeWidth="0.753886"
        />
      </svg>
    </div>
  );
}

// Позиции звезд, сгенерированные вне рендера для чистоты компонентов React 19
const STARS = Array.from({ length: 120 }, (_, i) => ({
  id: i,
  x: (i * 37 + 13) % 100,
  y: (i * 73 + 29) % 100,
  size: ((i * 17) % 15) / 10 + 0.3,
  duration: ((i * 19) % 40) / 10 + 3,
  delay: ((i * 23) % 60) / 10,
  opacity: ((i * 31) % 50) / 100 + 0.1,
}));

const BIG_STARS = Array.from({ length: 8 }, (_, i) => ({
  id: i,
  x: (i * 47 + 19) % 100,
  y: (i * 29 + 11) % 60,
  size: ((i * 13) % 20) / 10 + 2,
  duration: ((i * 17) % 30) / 10 + 4,
  delay: ((i * 31) % 50) / 10,
}));

export default function App() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#070D19] text-[#EBF0F4] relative overflow-hidden flex flex-col items-center selection:bg-[#38A169]/30 selection:text-white">
      
      {/* --- ФОН: СЕВЕРНОЕ СИЯНИЕ И ЗВЕЗДЫ --- */}
      <div className="app-background">
        <div className="space-cloud space-cloud--one" />
        <div className="space-cloud space-cloud--two" />

        {STARS.map((star) => (
          <div
            key={star.id}
            className="star"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: star.opacity,
              animation: `twinkle ${star.duration}s ease-in-out ${star.delay}s infinite`,
            }}
          />
        ))}

        {BIG_STARS.map((star) => (
          <div
            key={`big-${star.id}`}
            className="star star--big"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: 0.8,
              animation: `twinkleBig ${star.duration}s ease-in-out ${star.delay}s infinite`,
            }}
          />
        ))}

        {/* --- СЕВЕРНОЕ СИЯНИЕ: 3 ПОЛОСЫ ВВЕРХУ --- */}
        <div className="aurora-container">
          <div className="aurora-band aurora-band--one" />
          <div className="aurora-band aurora-band--two" />
          <div className="aurora-band aurora-band--three" />
        </div>
        <div className="space-glow space-glow--orange" />
        <div className="space-glow space-glow--blue" />
      </div>

      {/* --- ОСНОВНОЙ КОНТЕНТ --- */}
      <div className="relative z-10 w-full max-w-[1440px] px-6 sm:px-8 md:px-16 py-6 flex flex-col gap-20 md:gap-28">
        
        {/* ================================================= */}
        {/* НАВИГАЦИЯ С ВАШИМ ТОЧНЫМ ЛОГОТИПОМ               */}
        {/* ================================================= */}
        <header className="flex items-center justify-between py-2 border-b border-white/15">
          <a href="#" className="flex items-center group cursor-pointer -my-2">
            <StillWildsLogo width={150} height={75} color="#FFFFFF" />
          </a>

          <nav className="hidden md:flex items-center gap-8 tracking-wider text-gray-300 type-body-sm">
            <a href="#provinces" className="hover:text-white transition-colors">Provinces</a>
            <a href="#wildlife" className="hover:text-white transition-colors">Wildlife</a>
            <a href="#parks" className="hover:text-white transition-colors">Parks</a>
            <a href="#safety" className="hover:text-white transition-colors">Safety Guide</a>
            <a href="#newsletter" className="hover:text-white transition-colors">Dispatch</a>
          </nav>

          <a 
            href="#parks"
            className="px-8 py-2.5 bg-[#D96B32] hover:bg-[#E07B50] text-white type-button rounded-full transition-all cursor-pointer shadow-lg shadow-[#D96B32]/20"
          >
            Get Started
          </a>
        </header>

        {/* ================================================= */}
        {/* SECTION 1: HERO СЕКЦИЯ                           */}
        {/* ================================================= */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-2">
          
          {/* Левая колонка */}
          <div className="lg:col-span-5 space-y-8 pr-2">
            
            <h1 className="tracking-wide">
              <span className="text-gray-300">DISCOVER</span> <br />
              <span className="text-white">THE STILL</span> <br />
              <span className="text-[#38A169]">WILDS</span> <br />
              <span className="text-white">OF CANADA</span>
            </h1>

            <p 
              className="text-gray-400 leading-relaxed max-w-sm font-normal"
              style={{ 
                fontFamily: "Outfit, serif",
                fontSize: "100%"
              }}
            >
              Mountains, Wildlife, Cities — All In One Place. Reliable Data From Parks Canada And Official Sources To Help You Explore Safely.
            </p>

            <div 
              className="flex flex-wrap items-center justify-start w-full pt-2 gap-4" 
            >
              <a 
                href="#parks"
                className="flex items-center gap-2 px-6 py-2.5 bg-[#D96B32] hover:bg-[#E07B50] type-button rounded-full transition-all cursor-pointer shadow-lg shadow-[#D96B32]/25 text-white"
              >
                <span>Explore The Map</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a 
                href="#provinces"
                className="px-8 py-2.5 bg-transparent type-button rounded-full transition-all cursor-pointer border border-[#48B878] text-[#48B878] hover:bg-[#48B878]/10"
              >
                All Provinces
              </a>
            </div>

            {/* Статистика */}
            <div className="grid grid-cols-4 pt-8 text-left">
              <div className="flex flex-col items-start px-2 lg:px-4">
                <p className="type-stat" style={{ fontSize: "clamp(1.65rem, 2.6vw, 2.75rem)", color: "#D96B32", lineHeight: "1.1" }}>48</p>
                <p className="pt-2 text-gray-400 text-[10px] md:text-xs">National Parks</p>
              </div>
              <div className="flex flex-col items-start border-l border-white/15 px-2 lg:px-4">
                <p className="type-stat" style={{ fontSize: "clamp(1.65rem, 2.6vw, 2.75rem)", color: "#D96B32", lineHeight: "1.1" }}>13</p>
                <p className="pt-2 text-gray-400 text-[10px] md:text-xs">Provinces</p>
              </div>
              <div className="flex flex-col items-start border-l border-white/15 px-2 lg:px-4">
                <p className="type-stat" style={{ fontSize: "clamp(1.65rem, 2.6vw, 2.75rem)", color: "#D96B32", lineHeight: "1.1" }}>200+</p>
                <p className="pt-2 text-gray-400 text-[10px] md:text-xs">Wildlife Species</p>
              </div>
              <div className="flex flex-col items-start border-l border-white/15 px-2 lg:px-4">
                <p className="type-stat" style={{ fontSize: "clamp(1.65rem, 2.6vw, 2.75rem)", color: "#D96B32", lineHeight: "1.1" }}>10M</p>
                <p className="pt-2 text-gray-400 text-[10px] md:text-xs">km² of Nature</p>
              </div>
            </div>

          </div>

          {/* Правая колонка с карточкой Banff и 3 мини-карточками */}
          <div className="lg:col-span-7">
            <div className="group relative w-full overflow-hidden rounded-2xl border border-white/10 bg-[#0E1726]/90 shadow-[0_0_30px_rgba(56,161,105,0.14),0_0_65px_rgba(217,107,50,0.08),0_25px_70px_rgba(2,6,23,0.8)] backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-[#38A169]/50 hover:shadow-[0_0_38px_rgba(56,161,105,0.28),0_0_80px_rgba(217,107,50,0.14),0_24px_60px_rgba(9,30,35,0.5)]">
              <div className="relative aspect-[2/1] overflow-hidden bg-[#0a1521]">
                <img 
                  src="/image-9.png" 
                  alt="Mountain landscape in Banff National Park"
                  className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E1726] via-transparent to-transparent opacity-60" />
              </div>

              <div className="space-y-4 p-6">
                <span className="type-tag inline-flex items-center gap-1 rounded-full border border-[#38A169] px-6 py-1.5 text-[#6ee7a1] bg-[#38A169]/10">
                  ★ FEATURED
                </span>

                <h2 className="flex items-center gap-2 text-xl font-bold tracking-wide text-white md:text-2xl">
                  <MapPinned className="h-5 w-5 shrink-0 text-[#6ee7a1]" aria-hidden="true" />
                  <span>BANFF NATIONAL PARK</span>
                </h2>

                <p className="text-sm leading-relaxed text-gray-200">
                  Canada's Oldest National Park. Lake Louise, Icefields Parkway, Hot Springs And Glaciers.
                </p>

                <div className="flex items-center justify-between border-t border-white/10 pt-4 text-xs text-gray-300">
                  <span>Alberta · 6,641 Km²</span>
                  <a href="#parks" className="flex items-center gap-1 font-medium text-white transition-colors hover:text-[#6ee7a1]">
                    Learn More →
                  </a>
                </div>
              </div>
            </div>

            {/* 3 Карточки снизу */}
            <div className="mt-4 grid w-full grid-cols-1 gap-2.5 md:grid-cols-3">
              
              <div className="group flex min-h-[15.5rem] flex-col items-start rounded-[1.5rem] border border-white/5 bg-[#101d31] p-4 shadow-[0_16px_40px_rgba(2,6,23,0.24)] transition-all duration-300 hover:-translate-y-1 hover:border-[#38A169]/45 hover:shadow-[0_20px_44px_rgba(20,117,76,0.16)]">
                <div className="flex h-11 w-11 items-center justify-center text-[#48d68b]">
                  <img src="/icon-mountains.svg" alt="" className="h-9 w-9" />
                </div>
                <h3 className="mt-5 text-lg font-bold leading-tight text-[#eef2f3]">
                  MOUNTAINS & PARKS
                </h3>
                <p className="mt-5 text-xs leading-relaxed text-[#abb8c8]">
                  Banff, Jasper, Yoho — 48 National Parks Of Canada Are Waiting For You.
                </p>
                <div className="mt-auto flex w-full items-center justify-between pt-5 text-[10px] font-medium">
                  <span className="rounded-full border border-[#38A169] px-3 py-1 uppercase tracking-wide text-[#52d995]">Nature</span>
                  <a href="#parks" className="flex items-center gap-1 text-[#52d995] transition-colors hover:text-white">Read More <ArrowRight className="h-3 w-3" /></a>
                </div>
              </div>

              <div className="group flex min-h-[15.5rem] flex-col items-start rounded-[1.5rem] border border-white/5 bg-[#101d31] p-4 shadow-[0_16px_40px_rgba(2,6,23,0.24)] transition-all duration-300 hover:-translate-y-1 hover:border-[#D96B32]/55 hover:shadow-[0_20px_44px_rgba(217,107,50,0.15)]">
                <div className="flex h-11 w-11 items-center justify-center text-[#e77a3a]">
                  <img src="/icon-paw.svg" alt="" className="h-9 w-9" />
                </div>
                <h3 className="mt-5 text-lg font-bold leading-tight text-[#eef2f3]">
                  WILDLIFE
                </h3>
                <p className="mt-5 text-xs leading-relaxed text-[#abb8c8]">
                  Bears, Moose, Wolves — Where They Live And How To Stay Safe.
                </p>
                <div className="mt-auto flex w-full items-center justify-between pt-5 text-[10px] font-medium">
                  <span className="rounded-full border border-[#D96B32] px-3 py-1 uppercase tracking-wide text-[#ee8d54]">Safety</span>
                  <a href="#wildlife" className="flex items-center gap-1 text-[#ee8d54] transition-colors hover:text-white">Learn More <ArrowRight className="h-3 w-3" /></a>
                </div>
              </div>

              <div className="group flex min-h-[15.5rem] flex-col items-start rounded-[1.5rem] border border-white/5 bg-[#101d31] p-4 shadow-[0_16px_40px_rgba(2,6,23,0.24)] transition-all duration-300 hover:-translate-y-1 hover:border-[#e6ddc8]/45 hover:shadow-[0_20px_44px_rgba(230,221,200,0.12)]">
                <div className="flex h-11 w-11 items-center justify-center text-[#e6ddc8]">
                  <img src="/icon-city.svg" alt="" className="h-9 w-9" />
                </div>
                <h3 className="mt-5 text-lg font-bold leading-tight text-[#eef2f3]">
                  CITIES OF CANADA
                </h3>
                <p className="mt-5 text-xs leading-relaxed text-[#abb8c8]">
                  Toronto, Vancouver, Montreal — Culture And Architecture.
                </p>
                <div className="mt-auto flex w-full items-center justify-between pt-5 text-[10px] font-medium">
                  <span className="rounded-full border border-[#e6ddc8] px-3 py-1 uppercase tracking-wide text-[#e6ddc8]">10 Cities</span>
                  <a href="#provinces" className="flex items-center gap-1 text-[#e6ddc8] transition-colors hover:text-white">View All <ArrowRight className="h-3 w-3" /></a>
                </div>
              </div>

            </div>

          </div>

        </section>

        {/* ================================================= */}
        {/* SECTION 2: EXPLORE ALL OF CANADA (Provinces)     */}
        {/* ================================================= */}
        <section id="provinces" className="pt-8 space-y-8 scroll-mt-12">
          
          {/* Заголовок секции */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3">
              <span className="type-tag inline-flex items-center gap-1.5 rounded-full border border-[#38A169] bg-[#38A169]/10 px-4 py-1 text-[#6ee7a1]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#38A169]" />
                10 PROVINCES · 3 TERRITORIES
              </span>
              <h2 className="tracking-wide">
                EXPLORE <br />
                ALL OF <span className="text-[#38A169]">CANADA</span>
              </h2>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 max-w-lg">
              <p className="text-gray-400 text-sm leading-relaxed">
                From the Pacific coast to the Atlantic shores, across vast tundra and dense forests — every province has its own story.
              </p>
              <a 
                href="#parks"
                className="shrink-0 flex items-center gap-2 px-5 py-2 rounded-full border border-[#38A169] text-[#6ee7a1] hover:bg-[#38A169]/15 hover:text-white transition-all type-button"
              >
                <span>Interactive Map</span>
                <Compass className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Асимметричная сетка 13 провинций и территорий */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3.5">
            {PROVINCES_DATA.map((prov) => (
              <div
                key={prov.id}
                className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0E1726] shadow-[0_12px_30px_rgba(2,6,23,0.3)] transition-all duration-500 hover:-translate-y-1 hover:border-[#38A169]/50 hover:shadow-[0_16px_36px_rgba(56,161,105,0.18)] ${prov.colSpan} h-56 md:h-64`}
              >
                {/* Фотография */}
                <img
                  src={prov.image}
                  alt={prov.name}
                  className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
                  loading="lazy"
                />

                {/* Градиентные наложения для читаемости текста */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#070e1b] via-[#070e1b]/45 to-transparent" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,161,105,0.18),transparent_65%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Верхний бейдж региона */}
                <div className="absolute top-3.5 left-3.5 z-10">
                  <span className="type-tag rounded-full border border-white/20 bg-[#070e1b]/70 px-3 py-1 text-[10px] text-gray-200 backdrop-blur-md">
                    {prov.tag}
                  </span>
                </div>

                {/* Нижний контент карточки */}
                <div className="absolute bottom-0 inset-x-0 p-4 z-10 space-y-1">
                  <h3 className="text-base md:text-lg font-bold tracking-wide text-white group-hover:text-[#6ee7a1] transition-colors">
                    {prov.name.toUpperCase()}
                  </h3>
                  <div className="flex items-center justify-between text-xs text-gray-300">
                    <span className="line-clamp-1">{prov.tagline}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-white/50 group-hover:text-[#6ee7a1] group-hover:translate-x-1 transition-all shrink-0 ml-2" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Статистика провинций */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 p-4 md:p-6 rounded-2xl bg-[#0e1726]/80 border border-white/10 backdrop-blur-md shadow-xl">
            {PROVINCE_STATS.map((stat, idx) => (
              <div 
                key={idx} 
                className={`flex items-center gap-3.5 px-3 py-2 ${idx > 0 ? 'md:border-l md:border-white/10' : ''}`}
              >
                <div className="w-10 h-10 rounded-xl bg-[#38A169]/10 border border-[#38A169]/30 flex items-center justify-center text-[#6ee7a1] shrink-0">
                  {idx === 0 && <MapPin className="w-5 h-5" />}
                  {idx === 1 && <Compass className="w-5 h-5" />}
                  {idx === 2 && <Clock className="w-5 h-5" />}
                  {idx === 3 && <Globe className="w-5 h-5" />}
                </div>
                <div>
                  <p className="type-stat text-xl md:text-2xl text-white leading-tight">{stat.value}</p>
                  <p className="text-gray-400 text-xs">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>

        </section>

        {/* ================================================= */}
        {/* SECTION 3: CANADA'S WILDLIFE                     */}
        {/* ================================================= */}
        <section id="wildlife" className="pt-8 space-y-8 scroll-mt-12">
          
          {/* Заголовок секции */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3">
              <span className="type-tag inline-flex items-center gap-1.5 rounded-full border border-[#D96B32] bg-[#D96B32]/10 px-4 py-1 text-[#ee8d54]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#D96B32]" />
                OVER 200 SPECIES
              </span>
              <h2 className="tracking-wide">
                CANADA'S <br />
                <span className="text-[#D96B32]">WILDLIFE</span>
              </h2>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 max-w-lg">
              <p className="text-gray-400 text-sm leading-relaxed">
                Bears, wolves, whales, caribou... Canada's ecosystems are home to some of the most resilient and majestic wildlife on Earth. Learn how to observe them safely.
              </p>
              <a 
                href="#safety"
                className="shrink-0 flex items-center gap-2 px-5 py-2 rounded-full border border-[#D96B32] text-[#ee8d54] hover:bg-[#D96B32]/15 hover:text-white transition-all type-button"
              >
                <span>All Wildlife</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Bento сетка животных */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
            
            {/* Большая карточка: Гризли (Grizzly Bear) */}
            <div className="lg:col-span-6 group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0E1726] shadow-[0_16px_40px_rgba(2,6,23,0.4)] transition-all duration-500 hover:-translate-y-1 hover:border-[#D96B32]/50 hover:shadow-[0_20px_45px_rgba(217,107,50,0.2)] min-h-[26rem] md:min-h-[34rem] flex flex-col justify-end p-6 md:p-8">
              <img
                src={WILDLIFE_DATA.featured.image}
                alt={WILDLIFE_DATA.featured.name}
                className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070e1b] via-[#070e1b]/40 to-transparent" />
              
              <div className="relative z-10 space-y-3">
                <span className="type-tag inline-flex items-center rounded-full border border-[#D96B32] bg-[#D96B32]/20 px-3.5 py-1 text-[10px] text-[#ee8d54] backdrop-blur-md">
                  {WILDLIFE_DATA.featured.category}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold tracking-wide text-white">
                  {WILDLIFE_DATA.featured.name.toUpperCase()}
                </h3>
                <p className="text-sm text-gray-300 italic">
                  {WILDLIFE_DATA.featured.scientific}
                </p>
                <div className="flex items-center justify-between border-t border-white/15 pt-3 text-xs text-gray-300">
                  <span>{WILDLIFE_DATA.featured.habitat}</span>
                  <span className="text-[#ee8d54] font-medium">Apex Predator</span>
                </div>
              </div>
            </div>

            {/* Правая сетка 2x2: Волк, Лось, Карибу, Орел */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {WILDLIFE_DATA.grid.map((animal, idx) => (
                <div
                  key={idx}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0E1726] shadow-lg transition-all duration-500 hover:-translate-y-1 hover:border-[#D96B32]/50 h-56 md:h-auto flex flex-col justify-end p-5"
                >
                  <img
                    src={animal.image}
                    alt={animal.name}
                    className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070e1b] via-[#070e1b]/50 to-transparent" />

                  <div className="relative z-10 space-y-1.5">
                    <span className="type-tag inline-block rounded-full border border-white/20 bg-[#070e1b]/70 px-2.5 py-0.5 text-[9px] text-gray-300 backdrop-blur-sm">
                      {animal.category}
                    </span>
                    <h4 className="text-base font-bold text-white group-hover:text-[#ee8d54] transition-colors">
                      {animal.name.toUpperCase()}
                    </h4>
                    <p className="text-[11px] text-gray-300">
                      {animal.habitat}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Нижний ряд 3 животных: Косатка, Морская черепаха, Пума */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {WILDLIFE_DATA.bottom.map((animal, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0E1726] shadow-lg transition-all duration-500 hover:-translate-y-1 hover:border-[#D96B32]/50 h-52 flex flex-col justify-end p-5"
              >
                <img
                  src={animal.image}
                  alt={animal.name}
                  className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070e1b] via-[#070e1b]/50 to-transparent" />

                <div className="relative z-10 space-y-1">
                  <span className="type-tag inline-block rounded-full border border-white/20 bg-[#070e1b]/70 px-2.5 py-0.5 text-[9px] text-gray-300 backdrop-blur-sm">
                    {animal.category}
                  </span>
                  <h4 className="text-base font-bold text-white group-hover:text-[#ee8d54] transition-colors">
                    {animal.name.toUpperCase()}
                  </h4>
                  <p className="text-[11px] text-gray-300">
                    {animal.habitat}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Баннер правил безопасности дикой природы */}
          <div 
            id="safety"
            className="relative overflow-hidden rounded-2xl border border-[#D96B32]/40 bg-gradient-to-r from-[#1c1318]/95 via-[#131b28]/95 to-[#0e1726]/95 p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-[0_0_40px_rgba(217,107,50,0.12)] backdrop-blur-md"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#D96B32]/15 border border-[#D96B32]/30 flex items-center justify-center text-[#ee8d54] shrink-0 mt-1">
                <ShieldAlert className="w-6 h-6" />
              </div>
              <div className="space-y-1.5 max-w-2xl">
                <h4 className="text-lg font-bold tracking-wide text-white">
                  WILDLIFE SAFETY RULES
                </h4>
                <p className="text-xs md:text-sm text-gray-300 leading-relaxed">
                  Always maintain safe distance (100m for bears, 30m for other large wildlife). Never feed animals. Store food in certified bear-proof canisters, travel in groups, and carry bear spray on accessible hip holsters.
                </p>
              </div>
            </div>

            <button 
              onClick={() => alert("Parks Canada Safety Guide: Always carry bear spray, stay at least 100m from bears and wolves, pack out all trash, and make noise while hiking.")}
              className="shrink-0 px-6 py-2.5 bg-[#D96B32] hover:bg-[#E07B50] text-white type-button rounded-full transition-all cursor-pointer shadow-lg shadow-[#D96B32]/20 flex items-center gap-2"
            >
              <span>Official Safety Guide</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </section>

        {/* ================================================= */}
        {/* SECTION 4: CANADA'S NATIONAL PARKS               */}
        {/* ================================================= */}
        <section id="parks" className="pt-8 space-y-8 scroll-mt-12">
          
          {/* Заголовок секции */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3">
              <span className="type-tag inline-flex items-center gap-1.5 rounded-full border border-[#38A169] bg-[#38A169]/10 px-4 py-1 text-[#6ee7a1]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#38A169]" />
                48 NATIONAL PARKS
              </span>
              <h2 className="tracking-wide">
                CANADA'S <br />
                NATIONAL <span className="text-[#38A169]">PARKS</span>
              </h2>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 max-w-lg">
              <p className="text-gray-400 text-sm leading-relaxed">
                From the Rocky Mountains to the Atlantic coast... Canada's national parks preserve some of the most breathtaking wilderness on Earth.
              </p>
              <a 
                href="#parks"
                className="shrink-0 flex items-center gap-2 px-5 py-2 rounded-full border border-[#38A169] text-[#6ee7a1] hover:bg-[#38A169]/15 hover:text-white transition-all type-button"
              >
                <span>All 48 Parks</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Сетка парков: Featured Banff слева + 2 карточки справа */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
            
            {/* Большая карточка: Banff National Park */}
            <div className="lg:col-span-7 group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0E1726] shadow-[0_16px_40px_rgba(2,6,23,0.4)] transition-all duration-500 hover:-translate-y-1 hover:border-[#38A169]/50 hover:shadow-[0_20px_45px_rgba(56,161,105,0.2)] min-h-[26rem] md:min-h-[32rem] flex flex-col justify-end p-6 md:p-8">
              <img
                src={PARKS_DATA.featured.image}
                alt={PARKS_DATA.featured.name}
                className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070e1b] via-[#070e1b]/45 to-transparent" />
              
              <div className="relative z-10 space-y-3">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="type-tag inline-flex items-center rounded-full border border-[#38A169] bg-[#38A169]/20 px-3.5 py-1 text-[10px] text-[#6ee7a1] backdrop-blur-md">
                    ★ FEATURED PARK
                  </span>
                  <span className="flex items-center gap-1 text-amber-400 text-xs font-semibold">
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                    {PARKS_DATA.featured.rating} (Verified by Parks Canada)
                  </span>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold tracking-wide text-white">
                  {PARKS_DATA.featured.name.toUpperCase()}
                </h3>

                <p className="text-sm text-gray-200 max-w-xl leading-relaxed">
                  {PARKS_DATA.featured.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-1">
                  {PARKS_DATA.featured.tags.map((tag, idx) => (
                    <span key={idx} className="text-[10px] uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-white/10 text-gray-300 border border-white/10">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between border-t border-white/15 pt-3 text-xs text-gray-300">
                  <span>{PARKS_DATA.featured.location}</span>
                  <span className="text-[#6ee7a1]">Est. {PARKS_DATA.featured.established}</span>
                </div>
              </div>
            </div>

            {/* 2 Карточки справа: Jasper & Yoho */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              {PARKS_DATA.side.map((park, idx) => (
                <div
                  key={idx}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0E1726] shadow-lg transition-all duration-500 hover:-translate-y-1 hover:border-[#38A169]/50 flex-1 min-h-[15rem] flex flex-col justify-end p-6"
                >
                  <img
                    src={park.image}
                    alt={park.name}
                    className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070e1b] via-[#070e1b]/50 to-transparent" />

                  <div className="relative z-10 space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="type-tag inline-block rounded-full border border-white/20 bg-[#070e1b]/70 px-2.5 py-0.5 text-[9px] text-[#6ee7a1] backdrop-blur-sm">
                        {park.tag}
                      </span>
                      <span className="flex items-center gap-1 text-amber-400 text-xs">
                        <Star className="w-3 h-3 fill-amber-400" />
                        {park.rating}
                      </span>
                    </div>

                    <h4 className="text-lg font-bold text-white group-hover:text-[#6ee7a1] transition-colors">
                      {park.name.toUpperCase()}
                    </h4>
                    <p className="text-xs text-gray-300 line-clamp-2">
                      {park.description}
                    </p>
                    <p className="text-[11px] text-gray-400 pt-1">
                      {park.location}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Нижний ряд 3 карточек: Gros Morne, Pacific Rim, +42 More Parks */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            
            {PARKS_DATA.bottom.map((park, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0E1726] shadow-lg transition-all duration-500 hover:-translate-y-1 hover:border-[#38A169]/50 h-64 flex flex-col justify-end p-5"
              >
                <img
                  src={park.image}
                  alt={park.name}
                  className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070e1b] via-[#070e1b]/50 to-transparent" />

                <div className="relative z-10 space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="type-tag inline-block rounded-full border border-white/20 bg-[#070e1b]/70 px-2.5 py-0.5 text-[9px] text-[#6ee7a1] backdrop-blur-sm">
                      {park.tag}
                    </span>
                    <span className="flex items-center gap-1 text-amber-400 text-xs">
                      <Star className="w-3 h-3 fill-amber-400" />
                      {park.rating}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-white group-hover:text-[#6ee7a1] transition-colors">
                    {park.name.toUpperCase()}
                  </h4>
                  <p className="text-xs text-gray-300 line-clamp-2">
                    {park.description}
                  </p>
                  <p className="text-[11px] text-gray-400">
                    {park.location}
                  </p>
                </div>
              </div>
            ))}

            {/* Карточка +42 More Parks с сиянием */}
            <div className="relative overflow-hidden rounded-2xl border border-[#38A169]/40 bg-gradient-to-br from-[#0a1829] via-[#0b2426] to-[#0a1829] p-6 h-64 flex flex-col items-center justify-center text-center shadow-[0_0_35px_rgba(56,161,105,0.2)]">
              {/* Фоновые пятна северного сияния */}
              <div className="absolute -top-12 -left-12 w-40 h-40 rounded-full bg-[#38A169]/25 blur-2xl" />
              <div className="absolute -bottom-12 -right-12 w-40 h-40 rounded-full bg-[#D96B32]/20 blur-2xl" />

              <div className="relative z-10 space-y-2">
                <p className="type-stat text-5xl md:text-6xl text-[#6ee7a1] leading-none tracking-tight">
                  +42
                </p>
                <p className="type-tag tracking-widest text-white text-xs uppercase">
                  More National Parks
                </p>
                <p className="text-xs text-gray-300 max-w-[200px] mx-auto pb-2">
                  Coast-to-coast sanctuaries waiting for your footprint.
                </p>
                <button 
                  onClick={() => alert("Explore all 48 Canadian National Parks: From Quttinirpaaq in the far north to Point Pelee in the south.")}
                  className="px-6 py-2 bg-[#D96B32] hover:bg-[#E07B50] text-white type-button text-xs rounded-full transition-all cursor-pointer shadow-lg shadow-[#D96B32]/30"
                >
                  View All Parks
                </button>
              </div>
            </div>

          </div>

          {/* Статистика национальных парков */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 p-4 md:p-6 rounded-2xl bg-[#0e1726]/80 border border-white/10 backdrop-blur-md shadow-xl">
            {PARK_STATS.map((stat, idx) => (
              <div 
                key={idx} 
                className={`flex items-center gap-3.5 px-3 py-2 ${idx > 0 ? 'md:border-l md:border-white/10' : ''}`}
              >
                <div className="w-10 h-10 rounded-xl bg-[#38A169]/10 border border-[#38A169]/30 flex items-center justify-center text-[#6ee7a1] shrink-0">
                  {idx === 0 && <Trees className="w-5 h-5" />}
                  {idx === 1 && <Shield className="w-5 h-5" />}
                  {idx === 2 && <Users className="w-5 h-5" />}
                  {idx === 3 && <Calendar className="w-5 h-5" />}
                </div>
                <div>
                  <p className="type-stat text-xl md:text-2xl text-white leading-tight">{stat.value}</p>
                  <p className="text-gray-400 text-xs">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>

        </section>

        {/* ================================================= */}
        {/* SECTION 5: STAY UPDATED ON CANADA (Newsletter)   */}
        {/* ================================================= */}
        <section id="newsletter" className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0E1726]/85 p-8 md:p-14 text-center backdrop-blur-md shadow-2xl scroll-mt-12">
          
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-48 bg-radial from-[#38A169]/20 to-transparent blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <h3 className="text-2xl md:text-3xl font-bold tracking-wider text-white">
              STAY UPDATED ON CANADA
            </h3>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              Get seasonal park updates, wildlife safety alerts, and newly discovered trails in your inbox.
            </p>

            {subscribed ? (
              <div className="flex items-center justify-center gap-2 p-4 rounded-2xl bg-[#38A169]/15 border border-[#38A169]/40 text-[#6ee7a1] text-sm">
                <CheckCircle2 className="w-5 h-5 shrink-0" />
                <span>Thank you! You are now subscribed to the Still Wilds monthly dispatch.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
                <div className="relative w-full sm:w-96">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address..."
                    className="w-full pl-11 pr-4 py-3 rounded-full bg-[#070D19]/80 border border-white/15 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#38A169] transition-colors"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3 bg-[#D96B32] hover:bg-[#E07B50] text-white type-button rounded-full transition-all cursor-pointer shadow-lg shadow-[#D96B32]/25 shrink-0"
                >
                  Subscribe
                </button>
              </form>
            )}

            <p className="text-[11px] text-gray-500 pt-2">
              We respect your privacy. Unsubscribe at any time. Sourced with Parks Canada public alerts.
            </p>
          </div>

        </section>

        {/* ================================================= */}
        {/* SECTION 6: FOOTER                                */}
        {/* ================================================= */}
        <footer className="w-full border-t border-white/10 pt-12 pb-8 space-y-12">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            
            {/* Бренд колонка */}
            <div className="md:col-span-5 space-y-4">
              <a href="#" className="inline-block">
                <StillWildsLogo width={160} height={80} color="#FFFFFF" />
              </a>
              <p className="text-gray-400 text-xs md:text-sm leading-relaxed max-w-sm">
                Your ultimate guide to Canada's national parks, mountains, wildlife, and nature. Everything in one place.
              </p>
              
              {/* Соцсети */}
              <div className="flex items-center gap-3 pt-2">
                <a 
                  href="#" 
                  aria-label="Twitter / X" 
                  className="w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:border-white/30 hover:bg-white/10 flex items-center justify-center text-gray-300 hover:text-white transition-all"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a 
                  href="#" 
                  aria-label="Instagram" 
                  className="w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:border-white/30 hover:bg-white/10 flex items-center justify-center text-gray-300 hover:text-white transition-all"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </a>
                <a 
                  href="#" 
                  aria-label="Facebook" 
                  className="w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:border-white/30 hover:bg-white/10 flex items-center justify-center text-gray-300 hover:text-white transition-all"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a 
                  href="#" 
                  aria-label="YouTube" 
                  className="w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:border-white/30 hover:bg-white/10 flex items-center justify-center text-gray-300 hover:text-white transition-all"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Навигационные колонки */}
            <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
              
              <div className="space-y-3">
                <p className="type-tag text-white font-bold tracking-wider">DESTINATIONS</p>
                <ul className="space-y-2 text-xs text-gray-400">
                  <li><a href="#provinces" className="hover:text-white transition-colors">10 Provinces</a></li>
                  <li><a href="#provinces" className="hover:text-white transition-colors">3 Territories</a></li>
                  <li><a href="#parks" className="hover:text-white transition-colors">National Parks</a></li>
                  <li><a href="#provinces" className="hover:text-white transition-colors">Rocky Mountains</a></li>
                  <li><a href="#provinces" className="hover:text-white transition-colors">Atlantic Coast</a></li>
                </ul>
              </div>

              <div className="space-y-3">
                <p className="type-tag text-white font-bold tracking-wider">EXPLORE</p>
                <ul className="space-y-2 text-xs text-gray-400">
                  <li><a href="#wildlife" className="hover:text-white transition-colors">Wildlife Guide</a></li>
                  <li><a href="#safety" className="hover:text-white transition-colors">Safety Protocols</a></li>
                  <li><a href="#parks" className="hover:text-white transition-colors">Park Passes</a></li>
                  <li><a href="#newsletter" className="hover:text-white transition-colors">Trail Conditions</a></li>
                  <li><a href="#newsletter" className="hover:text-white transition-colors">Campgrounds</a></li>
                </ul>
              </div>

              <div className="space-y-3">
                <p className="type-tag text-white font-bold tracking-wider">ABOUT</p>
                <ul className="space-y-2 text-xs text-gray-400">
                  <li><a href="#" className="hover:text-white transition-colors">About StillWilds</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Parks Canada Data</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Conservation</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                </ul>
              </div>

            </div>

          </div>

          {/* Нижняя строчка копирайта и статуса */}
          <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
            <p>© 2026 Still Wilds · Data sourced from Parks Canada · Made with 🍁 in Canada</p>
            
            <div className="flex items-center gap-6">
              <span className="hover:text-white cursor-pointer transition-colors">Privacy</span>
              <span className="hover:text-white cursor-pointer transition-colors">Terms</span>
              <span className="hover:text-white cursor-pointer transition-colors">Sitemap</span>
            </div>

            <div className="flex items-center gap-2 text-[11px] text-[#6ee7a1] bg-[#38A169]/10 border border-[#38A169]/30 px-3 py-1 rounded-full">
              <span className="w-2 h-2 rounded-full bg-[#38A169] animate-pulse" />
              <span>Parks Status: 46 Open · 2 Seasonal</span>
            </div>
          </div>

        </footer>

      </div>
    </div>
  );
}
