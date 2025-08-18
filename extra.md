 <section
        className="w-full py-10 sm:py-14 md:py-16 bg-white"
        style={{
          backgroundImage: "", // change if needed
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundColor: "", // fallback color
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-12">
          {/* Left: Text */}
          <div className="order-2 md:order-1" ref={textRef4}>
            <div
              className={`text-left space-y-4 transition-all duration-700 ease-out ${
                textVisible4
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <h5
                className={`flex gap-3 text-base sm:text-lg md:text-[19px] font-extrabold uppercase transition-all duration-700 delay-100 ${
                  textVisible4
                    ? "translate-x-0 opacity-100"
                    : "translate-x-10 opacity-0"
                }`}
              >
                <TriangleBullet /> <span>Technologies</span>
              </h5>
              <h2
                className={`text-2xl sm:text-4xl md:text-[60px] not-italic normal-case font-extrabold leading-snug transition-all duration-700 delay-200 ${
                  textVisible4
                    ? "translate-x-0 opacity-100"
                    : "translate-x-10 opacity-0"
                }`}
              >
                New Technologies and Methods
              </h2>
              <p
                className={`text-gray-700 text-base sm:text-lg md:text-[18px] not-italic normal-case font-normal leading-relaxed transition-all duration-700 delay-300 ${
                  textVisible4
                    ? "translate-x-0 opacity-100"
                    : "translate-x-10 opacity-0"
                }`}
              >
                Top PHP web development companies in Chennai ensure timely
                project delivery. Modern websites feature advanced designs and
                interfaces, enabled by new technologies. Geektheory leverages
                these methods to integrate advanced features, elevating web
                development and staying ahead of competitors using outdated
                interfaces.
              </p>
              <div
                className={`text-gray-700 leading-relaxed text-base sm:text-lg md:text-[18px] transition-all duration-700 delay-300 ${
                  textVisible4
                    ? "translate-x-0 opacity-100"
                    : "translate-x-10 opacity-0"
                }`}
              >
                <Button title="GET STARTED" />
              </div>
            </div>
          </div>

          {/* Right: Image */}
          <div
            id="img-col"
            className="flex justify-center items-center order-1 md:order-2"
          >
            <div
              ref={imgRef4}
              className={`transition-all duration-700 ease-out transform ${
                imgVisible4
                  ? "translate-y-0 translate-x-0 opacity-100"
                  : "translate-y-20 opacity-0"
              }`}
            >
              <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {services.map((service, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center text-center bg-white shadow-md hover:shadow-[#e82110] rounded-full p-6 transition-all duration-300 transform hover:-translate-y-2"
                    >
                      <div className="w-20 h-20 flex items-center justify-center mb-4">
                        <img
                          src={service.img}
                          alt={service.title}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <h5 className="text-lg font-semibold text-gray-800">
                        {service.title}
                      </h5>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>