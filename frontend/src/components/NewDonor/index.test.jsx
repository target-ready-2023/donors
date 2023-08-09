import axios from "axios";
import { addDonorInfo } from "../../services/ApiService";
import { render, screen, fireEvent } from "@testing-library/react";
import NewDonor from "./index";
import { waitFor } from "@testing-library/react";

jest.mock("axios");

describe("New Donor", () => {
  const donorData = {
    donorName: "Akankshaaa",
    donorAddress: "Jaipur",
    donorEmail: "akankshafaujdar123@gmail.com",
    dateOfBirth: "2000-12-11",
    donorPan: "AHQF7122D",
    transactions: [
      {
        amount: "20000",
        transactionMode: "UPI",
        transactionDate: "20-12-2019",
      },
    ],
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  //Testing of addDonorInfo

  it("should add a new donor", async () => {
    const response = { status: 201, data: { donorID: 1 } };
    axios.post.mockResolvedValue(response);

    const result = await addDonorInfo(donorData);

    expect(axios.post).toHaveBeenCalledTimes(1);
    expect(axios.post).toHaveBeenCalledWith(
      `http://localhost:8080/api/donor/addDonor`,
      donorData
    );
    expect(result.data).toEqual(response.data); // Compare only the "data" property of the response
    expect(result.status).toEqual(response.status); // Compare only the "status" property of the response
  });
  //Error Handling
  it("should handle errors", async () => {
    const errorResponse = {
      response: { status: 500, data: { error: "Server Error" } },
    };
    axios.post.mockRejectedValue(errorResponse);

    await expect(addDonorInfo(donorData)).rejects.toEqual(errorResponse);
  });
  //Rendering NewDonor
  test("renders the NewDonor component", () => {
    render(NewDonor);
    const nameInput = screen.queryByLabelText("Name");
    waitFor(() => expect(nameInput).toBeInTheDocument());
  });
  
test("NewDonor component renders correctly", () => {
  const { asFragment } = render(NewDonor);
 waitFor(()=> expect(asFragment()).toMatchSnapshot());
});
//form submission triggers addDonorInfo 
  test("form submission triggers addDonorInfo and shows success message",  () => {
    render(NewDonor);

    // Fill out the form fields
   waitFor(()=> fireEvent.change(screen.queryByLabelText("Name"), { target: { value: "John Doe" } }));
   waitFor(()=> fireEvent.change(screen.queryByLabelText("Address"), { target: { value: "123 Main St" } }));
    // Fill out other fields...

    // Submit the form
   waitFor(()=> fireEvent.click(screen.queryByText("Submit")));

    // Wait for the promise to resolve
    waitFor(() => expect(screen.getByText("You have successfully added !")).toBeInTheDocument());
  });

});
