import Image from 'next/image'
import Link from 'next/link'

export function FounderNote() {
  return (
    <div className='dark:bg-elevated flex flex-col gap-4 rounded-lg border-[0.5px] bg-[#FFFDF9] p-4 shadow md:p-8 lg:-mx-4 lg:p-12 xl:-mx-6 2xl:-mx-8'>
      <div className='mb-4 flex flex-col gap-1.5 md:mb-6 lg:mb-8'>
        <p className='dark:text-quaternary font-mono text-amber-950/60 bg-blend-overlay'>Founder memo</p>
        <p className='dark:text-quaternary font-mono text-amber-950/60 bg-blend-overlay'>
          {new Date().toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric'
          })}
        </p>
        <p className='dark:text-quaternary font-mono text-amber-950/60 bg-blend-overlay'>Campsite Software Co.</p>
      </div>

      <p className='dark:text-primary leading-[1.8] text-amber-950'>Work communication is broken.</p>

      <p className='dark:text-primary leading-[1.8] text-amber-950'>
        People spend half their day bouncing between channels and chats, wading through a mess of half-formed messages
        and FOMO-inducing interruptions. We’ve collectively confused motion for progress.
      </p>

      <p className='dark:text-primary leading-[1.8] text-amber-950'>
        But there’s a better way to work. With Campsite, teams are:
      </p>

      <ul className='ml-4 list-disc'>
        <li className='dark:text-primary pl-2 leading-[1.8] text-amber-950'>Writing more, and writing better</li>
        <li className='dark:text-primary pl-2 leading-[1.8] text-amber-950'>
          Having deeper, more thoughtful discussions
        </li>

        <li className='dark:text-primary pl-2 leading-[1.8] text-amber-950'>
          Automatically building a rich archive of company knowledge
        </li>
      </ul>

      <p className='dark:text-primary leading-[1.8] text-amber-950'>
        If you’re ready to leave behind noisy chats and the illusion of progress in favor of meaningful discussions and
        real productivity, Campsite is ready for you.
      </p>

      <div className='mt-8 flex flex-col gap-4'>
        <Signature />

        <Link href='https://x.com/brian_lovin' target='_blank' className='mt-4 flex items-center gap-4 md:mt-6 lg:mt-8'>
          <Image
            src='/img/team/brian.jpeg'
            width={80}
            height={80}
            alt='Brian Lovin'
            className='h-11 w-11 rounded-full'
          />
          <div className='flex flex-col'>
            <p className='dark:text-tertiary text-amber-950'>Brian Lovin</p>
            <p className='dark:text-tertiary text-amber-950'>Co-founder &amp; CEO</p>
          </div>
        </Link>
      </div>
    </div>
  )
}
function Signature() {
  return (
    <svg
      className='dark:text-primary translate-x-4 scale-[130%] transform text-amber-950'
      width='141'
      height='31'
      viewBox='0 0 141 31'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M26.8567 18.6553C27.2865 18.6924 27.5659 18.9155 27.6949 19.3244C27.8238 19.7333 27.8668 20.2166 27.8238 20.7742C28.3826 19.9564 28.8447 19.027 29.2101 17.9861C29.296 17.763 29.3712 17.5214 29.4357 17.2612C29.5217 17.001 29.6077 16.7593 29.6936 16.5363C29.8011 16.3132 29.9193 16.1459 30.0483 16.0344C30.1772 15.8857 30.3384 15.8299 30.5318 15.8671C30.8542 15.9415 31.0584 16.1831 31.1444 16.592C31.2303 17.001 31.2733 17.4285 31.2733 17.8746C31.3808 18.2463 31.6602 18.5066 32.1115 18.6553C32.5628 18.7668 33.0572 18.8411 33.5945 18.8783C34.1533 18.8783 34.6798 18.8597 35.1741 18.8225C35.6684 18.7482 36.0123 18.711 36.2058 18.711C36.3992 18.711 36.6141 18.6924 36.8505 18.6553C37.1084 18.5809 37.3663 18.5251 37.6242 18.488C37.8821 18.4508 38.1293 18.4694 38.3657 18.5437C38.6021 18.5809 38.8063 18.711 38.9782 18.9341C39.1502 19.1571 39.2576 19.4359 39.3006 19.7705C39.3651 20.0679 39.3651 20.3653 39.3006 20.6627C39.2361 20.9601 39.1287 21.2204 38.9782 21.4434C38.8493 21.6293 38.6773 21.7222 38.4624 21.7222C38.1186 21.8709 37.7424 21.9267 37.3341 21.8895C36.9472 21.8152 36.5819 21.7966 36.238 21.8337C35.6577 21.8337 35.0774 21.8337 34.4971 21.8337C33.9168 21.8337 33.3365 21.7966 32.7563 21.7222C32.3479 21.6479 31.9181 21.5178 31.4667 21.3319C31.0154 21.146 30.6178 20.8486 30.2739 20.4397C30.0375 20.9229 29.7903 21.4062 29.5324 21.8895C29.2745 22.3356 29.0166 22.7631 28.7587 23.1721C28.5008 23.581 28.2322 23.9899 27.9528 24.3988C27.6734 24.8449 27.351 25.1423 26.9856 25.291C26.5343 25.5141 26.1474 25.3468 25.825 24.7892C25.6746 24.4918 25.5886 24.1944 25.5671 23.897C25.5457 23.5624 25.5671 23.2278 25.6316 22.8932C25.6746 22.5587 25.7391 22.2241 25.825 21.8895C25.8895 21.5549 25.954 21.2389 26.0185 20.9415C25.911 20.4583 25.9325 19.9564 26.083 19.4359C26.2334 18.9155 26.4913 18.6553 26.8567 18.6553Z'
        fill='currentColor'
      />
      <path
        d='M38.5675 18.6553C38.8468 18.6924 39.0618 18.8225 39.2122 19.0456C39.3627 19.2315 39.4594 19.4917 39.5024 19.8263C39.5668 20.1237 39.5883 20.4583 39.5668 20.83C39.5453 21.2018 39.5131 21.5735 39.4701 21.9453C39.6635 21.8709 39.8462 21.8337 40.0182 21.8337C40.2116 21.7966 40.3728 21.7408 40.5017 21.6665C41.039 21.4434 41.5871 21.1646 42.1459 20.83C42.8551 20.4211 43.5644 20.0307 44.2736 19.659C45.0043 19.2501 45.7458 18.9527 46.4981 18.7668C46.713 18.7296 46.9386 18.7668 47.1751 18.8783C47.433 18.9898 47.6371 19.1757 47.7876 19.4359C47.9595 19.6962 48.0455 20.0122 48.0455 20.3839C48.067 20.7185 47.938 21.0717 47.6586 21.4434C47.5082 21.6293 47.347 21.7222 47.1751 21.7222C47.0246 21.7222 46.8634 21.7408 46.6915 21.778C46.3691 21.8523 46.0467 21.9453 45.7243 22.0568C45.4019 22.1683 45.0903 22.2984 44.7894 22.4471C44.1447 22.7445 43.4999 23.0605 42.8551 23.3951C42.2319 23.7297 41.6086 24.0829 40.9853 24.4546C40.62 24.6777 40.1901 24.9193 39.6958 25.1795C39.223 25.4769 38.7824 25.5141 38.374 25.291C38.1161 25.1052 37.9334 24.8449 37.826 24.5104C37.697 24.213 37.6218 23.8784 37.6003 23.5066C37.5573 23.0977 37.5573 22.6888 37.6003 22.2798C37.6433 21.8709 37.697 21.4806 37.7615 21.1088C37.6755 20.8858 37.6325 20.6255 37.6325 20.3281C37.6325 20.0307 37.6648 19.7705 37.7293 19.5475C37.7937 19.2872 37.9012 19.0828 38.0516 18.9341C38.1806 18.7482 38.3525 18.6553 38.5675 18.6553Z'
        fill='currentColor'
      />
      <path
        d='M51.2618 18.5995C51.3692 18.6738 51.4659 18.7668 51.5519 18.8783C51.6379 18.9527 51.7131 19.0456 51.7776 19.1571C52.2074 19.0828 52.6373 19.1943 53.0671 19.4917C53.4969 19.9006 53.7226 20.3467 53.7441 20.83C53.7656 21.2761 53.6904 21.7594 53.5184 22.2798C53.9913 22.1683 54.4641 21.9824 54.9369 21.7222C55.4312 21.462 55.9148 21.1646 56.3876 20.83C56.8605 20.4954 57.3226 20.1609 57.7739 19.8263C58.2467 19.4917 58.698 19.2129 59.1279 18.9898C59.3643 18.8783 59.6115 18.7668 59.8694 18.6553C60.1488 18.5437 60.4067 18.6367 60.6431 18.9341C60.8365 19.1943 60.9547 19.4731 60.9977 19.7705C61.0407 20.0679 61.0299 20.3653 60.9655 20.6627C60.901 20.9229 60.7935 21.1646 60.6431 21.3876C60.4926 21.6107 60.3207 21.7408 60.1273 21.778C59.4395 21.9639 58.7625 22.317 58.0963 22.8375C57.43 23.3208 56.7745 23.7483 56.1297 24.12C55.8288 24.3059 55.5065 24.5104 55.1626 24.7334C54.8187 24.9565 54.4641 25.1423 54.0987 25.291C53.7334 25.4397 53.368 25.5141 53.0026 25.5141C52.6373 25.5513 52.2934 25.4769 51.971 25.291C51.6056 24.9936 51.3692 24.6219 51.2618 24.1758C51.1758 23.6925 51.1865 23.1906 51.294 22.6702C50.8642 22.7817 50.4343 22.949 50.0045 23.1721C49.4457 23.4695 48.8869 23.804 48.3281 24.1758C47.7908 24.5475 47.2427 24.8264 46.6839 25.0122C46.3186 25.1238 45.9424 25.1238 45.5556 25.0122C45.1687 24.9007 44.8786 24.529 44.6852 23.897C44.4487 23.1163 44.438 22.3914 44.6529 21.7222C44.8463 21.0159 45.158 20.4211 45.5878 19.9378C45.9962 19.4173 46.4475 19.0084 46.9418 18.711C47.4361 18.3764 47.8445 18.172 48.1669 18.0976C48.7042 17.9861 49.2307 17.9861 49.7466 18.0976C50.2624 18.172 50.7674 18.3393 51.2618 18.5995ZM47.0063 21.8895C47.2212 21.8152 47.4361 21.7222 47.6511 21.6107C47.866 21.4992 48.0809 21.3691 48.2958 21.2204C47.78 21.3319 47.3502 21.5549 47.0063 21.8895Z'
        fill='currentColor'
      />
      <path
        d='M60.1645 18.6553C60.3365 18.6553 60.4977 18.711 60.6481 18.8225C60.8201 18.8969 60.9598 19.0456 61.0672 19.2687C61.2606 19.6776 61.3466 20.0679 61.3251 20.4397C61.3251 20.7742 61.2714 21.1088 61.1639 21.4434C61.7227 21.2575 62.2815 21.0345 62.8403 20.7742C63.3991 20.514 63.9579 20.2538 64.5167 19.9936C64.7746 19.882 65.054 19.7519 65.3549 19.6032C65.6558 19.4545 65.9567 19.343 66.2576 19.2687C66.58 19.1943 66.8916 19.1757 67.1925 19.2129C67.5149 19.2129 67.805 19.3244 68.0629 19.5475C68.4283 19.8449 68.6432 20.198 68.7077 20.607C68.7722 21.0159 68.7507 21.4434 68.6432 21.8895C68.9441 21.7408 69.245 21.6107 69.5459 21.4992C69.8468 21.3505 70.1477 21.1832 70.4485 20.9973C71.0288 20.6999 71.6091 20.4025 72.1894 20.1051C72.7912 19.7705 73.393 19.4545 73.9947 19.1571C74.2741 19.0084 74.5965 18.8597 74.9619 18.711C75.3488 18.5251 75.6819 18.5995 75.9613 18.9341C76.1332 19.1571 76.2407 19.4359 76.2837 19.7705C76.3266 20.0679 76.3159 20.3839 76.2514 20.7185C76.2084 21.0159 76.1117 21.2761 75.9613 21.4992C75.8108 21.685 75.6389 21.778 75.4455 21.778C74.6288 21.8895 73.8013 22.2241 72.9631 22.7817C72.1249 23.3393 71.319 23.8226 70.5453 24.2316C70.3088 24.3431 70.0294 24.4918 69.7071 24.6777C69.4062 24.8635 69.0945 25.0308 68.7722 25.1795C68.4498 25.3282 68.1274 25.4212 67.805 25.4583C67.4826 25.4955 67.1925 25.4212 66.9346 25.2353C66.6337 25.0122 66.4188 24.6405 66.2898 24.12C66.1824 23.5624 66.1716 23.0048 66.2576 22.4471C65.7847 22.5215 65.3227 22.6516 64.8713 22.8375C64.42 23.0234 63.9687 23.2092 63.5173 23.3951C63.2164 23.5438 62.8941 23.7111 62.5502 23.897C62.2278 24.0829 61.8947 24.2687 61.5508 24.4546C61.2284 24.6405 60.8953 24.7892 60.5514 24.9007C60.229 25.0122 59.9066 25.0494 59.5843 25.0122C59.3908 24.9751 59.1974 24.8635 59.004 24.6777C58.7461 24.3803 58.5956 24.0643 58.5526 23.7297C58.5097 23.3951 58.5311 23.0605 58.6171 22.726C58.6816 22.3914 58.7891 22.0568 58.9395 21.7222C59.0684 21.3876 59.1974 21.0717 59.3264 20.7742C59.2404 20.291 59.2726 19.8263 59.4231 19.3802C59.552 18.8969 59.7992 18.6553 60.1645 18.6553Z'
        fill='currentColor'
      />
      <path
        d='M102.226 21.7223C101.13 21.7594 100.013 21.8152 98.8735 21.8896C97.7344 21.9267 96.6168 21.7037 95.5207 21.2204C95.4348 21.2204 95.3488 21.1832 95.2628 21.1089C95.1339 21.7408 94.9404 22.3542 94.6825 22.949C94.4461 23.5067 94.1775 23.99 93.8766 24.3989C93.5757 24.8078 93.2426 25.1052 92.8772 25.2911C92.5333 25.477 92.1895 25.4956 91.8456 25.3469C91.5232 25.1982 91.2868 24.9193 91.1363 24.5104C90.9644 24.1015 90.8677 23.6368 90.8462 23.1163C90.8247 22.5959 90.8677 22.0754 90.9751 21.555C91.0611 21.0345 91.1901 20.5698 91.362 20.1609C91.6414 19.5661 91.996 19.12 92.4259 18.8226C92.8557 18.5252 93.2855 18.488 93.7154 18.7111C93.7584 18.1906 93.9303 17.7817 94.2312 17.4843C94.5321 17.1869 94.8545 17.2241 95.1983 17.5958C95.5207 17.9304 95.8646 18.1906 96.23 18.3765C96.6168 18.5252 97.0144 18.6181 97.4228 18.6553C97.8311 18.6925 98.2287 18.7111 98.6156 18.7111C99.024 18.6739 99.4108 18.6553 99.7762 18.6553C100.206 18.6553 100.668 18.6181 101.162 18.5438C101.657 18.4322 102.108 18.488 102.516 18.7111C102.753 18.8598 102.914 19.1014 103 19.436C103.107 19.7706 103.14 20.1051 103.097 20.4397C103.075 20.7743 102.989 21.0717 102.839 21.3319C102.688 21.5921 102.484 21.7223 102.226 21.7223ZM92.5871 22.4472C92.6515 22.3357 92.7805 22.2799 92.9739 22.2799V21.778C92.9309 21.8524 92.8664 21.9453 92.7805 22.0568C92.6945 22.1312 92.63 22.2613 92.5871 22.4472Z'
        fill='currentColor'
      />
      <path
        d='M102.248 18.6553C102.549 18.6553 102.774 18.7482 102.925 18.9341C103.097 19.12 103.215 19.3802 103.279 19.7148C103.365 20.0494 103.408 20.4211 103.408 20.8301C103.408 21.2018 103.398 21.5736 103.376 21.9453C103.892 21.9081 104.386 21.7037 104.859 21.3319C105.332 20.923 105.805 20.4769 106.277 19.9936C106.75 19.4732 107.223 18.9899 107.696 18.5438C108.169 18.0977 108.652 17.8003 109.147 17.6516C109.555 17.54 109.974 17.5029 110.404 17.54C110.834 17.5772 111.264 17.6516 111.693 17.7631C112.145 17.8746 112.575 18.0047 112.983 18.1534C113.413 18.265 113.832 18.3579 114.24 18.4322C114.412 18.4694 114.616 18.488 114.853 18.488C115.111 18.4508 115.358 18.4508 115.594 18.488C115.852 18.488 116.089 18.5252 116.304 18.5995C116.54 18.6739 116.733 18.804 116.884 18.9899C117.077 19.2501 117.195 19.6033 117.238 20.0494C117.281 20.4583 117.228 20.8301 117.077 21.1646C116.905 21.5736 116.68 21.778 116.4 21.778C116.121 21.778 115.852 21.778 115.594 21.778C115.078 21.7409 114.563 21.6479 114.047 21.4992C113.531 21.3505 113.015 21.2204 112.499 21.1089C111.984 20.9602 111.468 20.8486 110.952 20.7743C110.436 20.6628 109.931 20.6442 109.437 20.7185C108.985 20.9044 108.534 21.1646 108.083 21.4992C107.653 21.8338 107.223 22.187 106.793 22.5587C106.363 22.9305 105.934 23.3022 105.504 23.674C105.095 24.0457 104.666 24.3617 104.214 24.6219C103.956 24.7706 103.677 24.8822 103.376 24.9565C103.097 25.068 102.817 25.0495 102.538 24.9007C102.001 24.6033 101.71 24.1387 101.667 23.5067C101.603 22.8375 101.603 22.1312 101.667 21.3877C101.538 21.1646 101.452 20.9044 101.41 20.607C101.367 20.2724 101.377 19.975 101.442 19.7148C101.485 19.4174 101.571 19.1758 101.7 18.9899C101.829 18.7668 102.011 18.6553 102.248 18.6553Z'
        fill='currentColor'
      />
      <path
        d='M116.479 18.6553C116.758 18.6925 116.973 18.8226 117.123 19.0456C117.274 19.2315 117.371 19.4917 117.414 19.8263C117.478 20.1237 117.499 20.4583 117.478 20.8301C117.456 21.2018 117.424 21.5736 117.381 21.9453C117.575 21.871 117.757 21.8338 117.929 21.8338C118.123 21.7966 118.284 21.7409 118.413 21.6665C118.95 21.4434 119.498 21.1646 120.057 20.8301C120.766 20.4211 121.476 20.0308 122.185 19.659C122.915 19.2501 123.657 18.9527 124.409 18.7668C124.624 18.7297 124.85 18.7668 125.086 18.8784C125.344 18.9899 125.548 19.1758 125.699 19.436C125.871 19.6962 125.957 20.0122 125.957 20.384C125.978 20.7185 125.849 21.0717 125.57 21.4434C125.419 21.6293 125.258 21.7223 125.086 21.7223C124.936 21.7223 124.775 21.7409 124.603 21.778C124.28 21.8524 123.958 21.9453 123.635 22.0568C123.313 22.1684 123.001 22.2985 122.701 22.4472C122.056 22.7446 121.411 23.0606 120.766 23.3952C120.143 23.7297 119.52 24.0829 118.896 24.4546C118.531 24.6777 118.101 24.9193 117.607 25.1796C117.134 25.477 116.694 25.5141 116.285 25.2911C116.027 25.1052 115.845 24.845 115.737 24.5104C115.608 24.213 115.533 23.8784 115.511 23.5067C115.468 23.0977 115.468 22.6888 115.511 22.2799C115.554 21.871 115.608 21.4806 115.673 21.1089C115.587 20.8858 115.544 20.6256 115.544 20.3282C115.544 20.0308 115.576 19.7706 115.64 19.5475C115.705 19.2873 115.812 19.0828 115.963 18.9341C116.092 18.7482 116.264 18.6553 116.479 18.6553Z'
        fill='currentColor'
      />
      <path
        d='M124.853 18.6553C125.025 18.6553 125.186 18.7111 125.337 18.8226C125.508 18.8969 125.648 19.0456 125.756 19.2687C125.949 19.6776 126.035 20.068 126.014 20.4397C126.014 20.7743 125.96 21.1089 125.852 21.4434C126.411 21.2576 126.97 21.0345 127.529 20.7743C128.088 20.5141 128.646 20.2538 129.205 19.9936C129.463 19.8821 129.742 19.752 130.043 19.6033C130.344 19.4546 130.645 19.343 130.946 19.2687C131.268 19.1943 131.58 19.1758 131.881 19.2129C132.203 19.2129 132.493 19.3245 132.751 19.5475C133.117 19.8449 133.332 20.1981 133.396 20.607C133.461 21.0159 133.439 21.4434 133.332 21.8896C133.633 21.7408 133.933 21.6107 134.234 21.4992C134.535 21.3505 134.836 21.1832 135.137 20.9973C135.717 20.6999 136.298 20.4025 136.878 20.1051C137.48 19.7706 138.081 19.4546 138.683 19.1572C138.963 19.0085 139.285 18.8598 139.65 18.7111C140.037 18.5252 140.37 18.5995 140.65 18.9341C140.822 19.1572 140.929 19.436 140.972 19.7706C141.015 20.068 141.004 20.384 140.94 20.7185C140.897 21.0159 140.8 21.2762 140.65 21.4992C140.499 21.6851 140.327 21.778 140.134 21.778C139.317 21.8896 138.49 22.2241 137.652 22.7818C136.813 23.3394 136.007 23.8227 135.234 24.2316C134.997 24.3431 134.718 24.4918 134.395 24.6777C134.095 24.8636 133.783 25.0309 133.461 25.1796C133.138 25.3283 132.816 25.4212 132.493 25.4584C132.171 25.4956 131.881 25.4212 131.623 25.2353C131.322 25.0123 131.107 24.6405 130.978 24.1201C130.871 23.5624 130.86 23.0048 130.946 22.4472C130.473 22.5215 130.011 22.6516 129.56 22.8375C129.108 23.0234 128.657 23.2093 128.206 23.3952C127.905 23.5439 127.582 23.7111 127.239 23.897C126.916 24.0829 126.583 24.2688 126.239 24.4546C125.917 24.6405 125.584 24.7892 125.24 24.9007C124.917 25.0123 124.595 25.0495 124.273 25.0123C124.079 24.9751 123.886 24.8636 123.692 24.6777C123.434 24.3803 123.284 24.0643 123.241 23.7297C123.198 23.3951 123.22 23.0606 123.306 22.726C123.37 22.3914 123.477 22.0568 123.628 21.7223C123.757 21.3877 123.886 21.0717 124.015 20.7743C123.929 20.291 123.961 19.8263 124.111 19.3802C124.24 18.8969 124.488 18.6553 124.853 18.6553Z'
        fill='currentColor'
      />
      <path
        d='M100.483 2.13525C100.375 2.03447 100.213 2.03447 99.9974 2.13525C99.7815 2.21084 99.5549 2.33681 99.3175 2.51317C99.1017 2.66434 98.8966 2.82811 98.7024 3.00447C98.5082 3.18083 98.3679 3.30681 98.2815 3.38239C97.5909 4.01226 96.9326 4.69252 96.3067 5.42316C95.7024 6.12861 95.1089 6.84666 94.5262 7.57731C93.2312 9.18977 91.9902 10.84 90.8031 12.5281C89.6377 14.2161 88.4722 15.9294 87.3067 17.6678L83.9399 22.8075C84.8463 22.9335 85.742 23.0469 86.6269 23.1476C87.5334 23.2736 88.4398 23.3996 89.3463 23.5256C93.0801 23.9791 96.8139 24.3948 100.548 24.7727C104.282 25.1506 108.026 25.2766 111.781 25.1506C112.623 25.1002 113.433 24.9995 114.21 24.8483C114.987 24.7223 115.774 24.5334 116.573 24.2814C116.767 24.231 116.983 24.231 117.22 24.2814C117.458 24.357 117.641 24.4704 117.771 24.6215C117.922 24.7979 117.997 24.9869 117.997 25.1884C118.019 25.4152 117.911 25.6545 117.674 25.9065C117.544 26.0828 117.361 26.2214 117.123 26.3222C116.907 26.4482 116.702 26.5363 116.508 26.5867C115.343 27.015 114.123 27.2292 112.85 27.2292C111.598 27.2544 110.379 27.2418 109.192 27.1914C107.853 27.1662 106.526 27.1158 105.21 27.0402C103.915 26.9646 102.598 26.8639 101.26 26.7379C98.4758 26.5111 95.7024 26.234 92.9398 25.9065C90.1772 25.5789 87.4039 25.2262 84.6197 24.8483C84.3176 24.7979 84.0046 24.7475 83.6809 24.6971C83.3787 24.6719 83.0765 24.6341 82.7744 24.5837C82.3643 25.2136 81.9434 25.8435 81.5118 26.4733C81.1017 27.1032 80.6809 27.7331 80.2492 28.363C80.1197 28.5645 79.9794 28.7913 79.8284 29.0432C79.6773 29.2952 79.5154 29.5345 79.3427 29.7613C79.1701 30.0132 78.9866 30.24 78.7924 30.4415C78.5981 30.6431 78.3931 30.7942 78.1773 30.895C77.8967 31.021 77.6269 31.0336 77.3679 30.9328C77.1305 30.8572 76.9039 30.7187 76.6881 30.5171C76.4722 30.3155 76.278 30.0762 76.1053 29.7991C75.9543 29.5471 75.8248 29.2952 75.7169 29.0432C75.3715 28.2622 75.1449 27.4307 75.037 26.5489C74.9507 25.6671 75.0154 24.8609 75.2312 24.1302C75.4471 23.3996 75.8248 22.8201 76.3643 22.3918C76.9255 21.9887 77.6809 21.8627 78.6305 22.0139L81.9974 22.543C82.3427 22.0139 82.6773 21.4848 83.001 20.9557C83.3463 20.4266 83.7024 19.8975 84.0694 19.3684C85.1701 17.6804 86.2816 16.0175 87.4039 14.3799C88.5262 12.717 89.6701 11.0668 90.8355 9.42912C91.3751 8.67328 91.9254 7.90484 92.4866 7.12381C93.0477 6.34277 93.6305 5.58693 94.2348 4.85628C94.8391 4.10044 95.465 3.39499 96.1125 2.73993C96.7815 2.05967 97.4722 1.45499 98.1844 0.925905C98.4434 0.749543 98.724 0.585778 99.0261 0.43461C99.3283 0.258246 99.6305 0.132272 99.9326 0.0566874C100.235 -0.0188958 100.537 -0.0188958 100.839 0.0566874C101.141 0.132272 101.422 0.296038 101.681 0.547985C101.918 0.799932 102.026 1.07707 102.005 1.37941C102.005 1.68175 101.929 1.93369 101.778 2.13525C101.648 2.33681 101.454 2.46278 101.195 2.51317C100.958 2.56356 100.731 2.45019 100.515 2.17304L100.483 2.13525ZM80.8643 24.2436L78.2097 23.9035C77.0874 23.7523 76.5478 24.3444 76.591 25.6797C76.591 25.8813 76.6125 26.1332 76.6557 26.4356C76.6989 26.7631 76.7528 27.0906 76.8176 27.4181C76.9039 27.7457 77.0118 28.048 77.1413 28.3252C77.2708 28.6023 77.4327 28.8165 77.6269 28.9676C78.1881 28.3378 78.7061 27.6197 79.1809 26.8135C79.6773 26.0324 80.1737 25.2766 80.6701 24.546L80.8643 24.2436Z'
        fill='currentColor'
      />
      <path
        d='M24.1928 13.5077C23.373 14.1004 22.5411 14.7033 21.6972 15.3164C20.8774 15.9091 20.0696 16.5324 19.2739 17.1864C22.2879 16.8186 25.2417 16.2974 28.1352 15.623C31.0528 14.9281 33.8378 13.988 36.4902 12.8026C36.876 12.6391 37.3341 12.4143 37.8646 12.1282C38.4192 11.8216 38.9617 11.4946 39.4922 11.1472C40.0227 10.7998 40.4928 10.4319 40.9028 10.0436C41.3368 9.63485 41.6141 9.23632 41.7346 8.84801C41.8793 8.45971 41.819 8.09183 41.5538 7.7444C41.3127 7.37653 40.7943 7.04953 39.9985 6.76341C38.9858 6.39554 37.9128 6.14007 36.7795 5.99701C35.6462 5.83352 34.4888 5.73133 33.3073 5.69045C32.1499 5.64958 30.9925 5.6598 29.8351 5.72111C28.6777 5.78242 27.5565 5.84373 26.4715 5.90505C24.6148 6.00723 22.7099 6.18095 20.7568 6.4262C18.8037 6.65101 16.8868 6.98822 15.006 7.43784C13.1252 7.88746 11.3168 8.48014 9.58068 9.21589C7.8687 9.95163 6.31344 10.8815 4.91492 12.0056C4.19155 12.5983 3.57668 13.2522 3.07032 13.9676C2.58807 14.6829 2.28666 15.4186 2.1661 16.1748C2.06965 16.9105 2.19021 17.636 2.52779 18.3513C2.88948 19.0462 3.56462 19.6593 4.55323 20.1907C4.79436 20.3338 5.01137 20.487 5.20427 20.6505C5.39717 20.7936 5.45745 21.0082 5.38511 21.2943C5.31278 21.5804 5.11988 21.7848 4.80642 21.9074C4.49295 22.0301 4.19155 22.0198 3.9022 21.8768C3.1306 21.4885 2.43134 21.0184 1.80442 20.4666C1.2016 19.9148 0.731411 19.2812 0.393837 18.5659C0.0562624 17.7689 -0.0642999 16.982 0.0321499 16.2054C0.1286 15.4084 0.369724 14.6522 0.755523 13.9369C1.16544 13.2012 1.6718 12.5165 2.27461 11.8829C2.90153 11.2494 3.56462 10.6772 4.26389 10.1662C5.87942 9.00129 7.66374 8.06118 9.61685 7.34587C11.57 6.63057 13.5592 6.03789 15.5847 5.56783C17.4172 5.15909 19.2498 4.85253 21.0823 4.64815C22.939 4.42334 24.8077 4.25984 26.6885 4.15766C28.7862 4.03504 30.8961 3.98394 33.018 4.00438C35.164 4.02482 37.2618 4.27006 39.3113 4.74012C40.1312 4.94449 40.951 5.23062 41.7708 5.59849C42.6147 5.96636 43.2417 6.49773 43.6516 7.19259C44.0615 7.9079 44.1097 8.61299 43.7962 9.30785C43.5069 10.0027 43.0849 10.6158 42.5303 11.1472C41.9516 11.699 41.3006 12.1997 40.5772 12.6493C39.878 13.099 39.1305 13.5077 38.3348 13.8756C37.5391 14.2435 36.7313 14.5807 35.9115 14.8872C35.0917 15.1734 34.2839 15.439 33.4882 15.6843C31.3663 16.3792 29.2203 16.9616 27.0501 17.4317C24.88 17.9017 22.6737 18.3003 20.4313 18.6273L21.227 18.8418C21.8298 19.0258 22.3964 19.2915 22.9269 19.6389C23.4574 19.9659 23.8673 20.344 24.1567 20.7732C24.4701 21.2023 24.6148 21.6622 24.5907 22.1527C24.5907 22.6636 24.3375 23.1848 23.8311 23.7161C23.4212 24.1249 22.939 24.4723 22.3844 24.7584C21.8298 25.0446 21.239 25.2694 20.6121 25.4329C20.0093 25.6168 19.3824 25.7496 18.7314 25.8314C18.1044 25.9131 17.4896 25.9642 16.8868 25.9847C16.4768 26.0051 16.0549 26.0051 15.6208 25.9847C15.1868 25.9642 14.7649 25.9029 14.3549 25.8007C13.945 25.719 13.5592 25.5861 13.1975 25.4022C12.8359 25.2183 12.5465 24.9628 12.3295 24.6358C12.0402 24.2271 11.9075 23.7979 11.9316 23.3483C11.9558 22.8986 12.0643 22.449 12.2572 21.9994C12.4501 21.5702 12.7032 21.141 13.0167 20.7119C13.3543 20.3031 13.6919 19.9148 14.0294 19.5469C13.6195 19.5469 13.1855 19.5776 12.7274 19.6389C12.2692 19.6798 11.8473 19.6593 11.4615 19.5776C11.2203 19.5367 11.0154 19.4856 10.8466 19.4243C10.6778 19.363 10.5452 19.2199 10.4487 18.9951C10.2799 18.6273 10.3282 18.3616 10.5934 18.1981C10.8586 18.0141 11.16 17.9017 11.4976 17.8609C11.5941 17.7791 11.7267 17.7484 11.8955 17.7689C12.0643 17.7689 12.2451 17.7791 12.438 17.7995C13.0408 17.7587 13.6436 17.7178 14.2464 17.6769C14.8493 17.6156 15.4641 17.5645 16.091 17.5236C16.7662 16.9105 17.4655 16.3178 18.1888 15.7456C18.9122 15.1734 19.6476 14.6011 20.3951 14.0289C20.805 13.7223 21.239 13.3544 21.6972 12.9253C22.1794 12.4961 22.6737 12.1997 23.1801 12.0362C23.4453 11.9545 23.6865 11.9545 23.9035 12.0362C24.1205 12.118 24.2893 12.2508 24.4098 12.4348C24.5304 12.5983 24.5786 12.7822 24.5545 12.9866C24.5304 13.1909 24.4098 13.3647 24.1928 13.5077ZM17.3208 19.7309C17.2002 19.7104 17.0676 19.7002 16.9229 19.7002C16.8024 19.6798 16.6818 19.6696 16.5612 19.6696C15.9825 20.2418 15.4279 20.8856 14.8975 21.6009C14.6805 21.887 14.4876 22.1731 14.3188 22.4592C14.1741 22.7658 14.1018 23.0417 14.1018 23.2869C14.1018 23.5322 14.1982 23.7468 14.3911 23.9307C14.6081 24.1147 14.9698 24.2373 15.4762 24.2986C16.1754 24.4008 16.8747 24.4212 17.574 24.3599C18.2973 24.319 18.9845 24.2168 19.6356 24.0533C19.9008 23.992 20.2504 23.8694 20.6845 23.6855C21.1426 23.522 21.5525 23.3176 21.9142 23.0724C22.3 22.8271 22.5652 22.5512 22.7099 22.2446C22.8546 21.9585 22.7702 21.652 22.4567 21.325C22.1674 21.0388 21.8178 20.8038 21.4078 20.6199C20.9979 20.4155 20.5518 20.2622 20.0696 20.16C19.6115 20.0374 19.1413 19.9455 18.659 19.8841C18.1768 19.8228 17.7307 19.7717 17.3208 19.7309Z'
        fill='currentColor'
      />
    </svg>
  )
}
