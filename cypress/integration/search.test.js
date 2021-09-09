describe("search button", () => {
  it("user can search", () => {
    //act

    //login
    //selectpatient by search
    //click on patient
    // yasmin@email.com pass yasmin123456!

    // arrange
    cy.visit("http://localhost:3000/");
    cy.findByText("Log In").click();
    // cy.findByLabelText("Email address").type("yasmin@email.com");
    // cy.findByLabelText("Password").type("yasmin123456!");
    // cy.findByText("Continue").click();
    cy.findByLabelText("search").click();
    cy.findByPlaceholderText("patient").type("Elvis");
    cy.findByText("Elvis Presley").click();
    // assert
    cy.findByText(
      "Elvis love singing and performing. But have to be reminded to get some rest and take his medicines."
    ).should("be.visible");

    //act

    cy.findByText("Daily Logs").click({ force: true });
  });
});
