const FAQ = () => {
  return (
    <div className="">
      <div className="">
        <h2 className="text-4xl text-center font-bold text-soft-pink mb-6 mt-20 shadow-lg">
          Frequently Asked Questions
        </h2>
        <div className="max-w-4xl mx-auto px-4">
          <div className="space-y-6">
            {/* <div>
              <h3 className="text-3xl mt-20 text-center font-medium text-gray-900 mb-6 leading-relaxed">
                What types of cookies do you offer?
              </h3>
              <p className="text-3xl text-center leading-relaxed mb-6 text-gray-600">
                We currently offer two kinds of cookies: the Harmonie Du Temps
                Chocolate Chip Cookie and the Summer Delight Cookie Box. As we
                are a new brand, we are evaluating how these initial offerings
                perform with current orders before expanding our product range.
              </p>
            </div> */}
            <div>
              <h3 className="text-3xl text-center font-medium text-gray-900 mb-6 leading-relaxed">
                Do you offer gluten-free or vegan options?
              </h3>
              <p className="text-3xl text-center leading-relaxed mb-6 text-gray-600">
                {/* Currently, we do not offer gluten-free or vegan options, but we
                are committed to providing the highest quality traditional
                cookies to our customers. */}
                Yes, we offer gluten-free options. Please specify your
                preference in your email. Currently, we do not offer vegan
                options, but we are committed to providing the highest quality
                traditional cookies to our customers.
              </p>
            </div>
            <div>
              <h3 className="text-3xl text-center font-medium text-gray-900 mb-6 leading-relaxed">
                How can I place an order?
              </h3>
              <p className="text-3xl text-center leading-relaxed mb-6 text-gray-600">
                {/* You can place an order directly through our website by selecting
                your desired cookies and quantity, then proceeding to checkout. */}
                All orders are confirmed and finalized through email
                communication.
              </p>
            </div>
            <div>
              <h3 className="text-3xl text-center font-medium text-gray-900 mb-6 leading-relaxed">
                How can I contact customer service?
              </h3>
              <p className="text-3xl text-center leading-relaxed mb-6 text-gray-600">
                {/* You can contact our customer service team through the Contact page on our website or by emailing [your email address]. */}
                You can contact our customer service team by emailing
                losnazia@gmail.com.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
