import React from "react";
import Image from 'next/image'

function Header() {
	return (
		<div className="shadow">
			<header className="bg-white">
				<div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 ">
					<div className="flex justify-between items-center py-6  md:space-x-10">
                    
                      <Image src={'/logo.svg'}  width="80" height="60"   />
						<div className="hidden md:block">
							<nav aria-label="Global" className="hidden md:block">
								<ul className="flex items-center gap-6 text-sm">
									<li>
										<a
											className="text-gray-500 transition hover:text-gray-500/75"
											href="/"
										>
											{" "}
											Home{" "}
										</a>
									</li>

									<li>
										<a
											className="text-gray-500 transition hover:text-gray-500/75"
											href="/"
										>
											{" "}
											Upload{" "}
										</a>
									</li>

									<li>
										<a
											className="text-gray-500 transition hover:text-gray-500/75"
											href="/"
										>
											{" "}
											About Us{" "}
										</a>
									</li>

									<li>
										<a
											className="text-gray-500 transition hover:text-gray-500/75"
											href="/"
										>
											{" "}
											Contact Us{" "}
										</a>
									</li>

									
								</ul>
							</nav>
						</div>

						<div className="flex items-center gap-41 ">
							<div className="sm:flex sm:gap-4">
								<a
									className="rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700 "
									href="/upload"
								>
									Get Started
								</a>
							</div>

							<div className="block md:hidden">
								<button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-5 w-5"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										strokeWidth="2"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M4 6h16M4 12h16M4 18h16"
										/>
									</svg>
								</button>
							</div>
						</div>
					</div>
				</div>
			</header>
		</div>
	);
}

export default Header;
