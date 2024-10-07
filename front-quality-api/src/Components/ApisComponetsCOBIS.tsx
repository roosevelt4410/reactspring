import React, { useState } from "react";
import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";
import "./../styles/styles.css";

interface Api {
  name: string;
  url: string;
}

interface ApiCategories {
  [key: string]: Api[];
}

const ApisComponetsCOBIS: React.FC = () => {
  const [selectedApi, setSelectedApi] = useState<string | null>(null);
  const [openCategory, setOpenCategory] = useState<string | null>(null);
  const [activeApi, setActiveApi] = useState<string | null>(null);

  const apis: ApiCategories = {
    Loans:[
      { name: "Loans API", url: `${process.env.PUBLIC_URL}/LOANSCOBIS/COBISLoansAPI-resolved-v2-0-0-min.json` },
      { name: "Collateral API", url: `${process.env.PUBLIC_URL}/LOANSCOBIS/COBISCollateralAPI-resolved-v1-0-11-min.json` },
      { name: "Collateral Policies API", url: `${process.env.PUBLIC_URL}/LOANSCOBIS/COBISCollateralPoliciesAPI-resolved-v1-0-0-min.json` },
      { name: "Collaterals Association API", url: `${process.env.PUBLIC_URL}/LOANSCOBIS/COBISCollateralsAssociationAPI-resolved-v1-0-7-min.json` },
      { name: "Collaterals Attributes API", url: `${process.env.PUBLIC_URL}/LOANSCOBIS/COBISCollateralsAttributesAPI-resolved-v1-0-1-min.json` },
      { name: "Credit Line Additional Data API", url: `${process.env.PUBLIC_URL}/LOANSCOBIS/COBISCreditLineAdditionalDataAPI-resolved-v1-0-1-min.json` },
      { name: "Credit Line API", url: `${process.env.PUBLIC_URL}/LOANSCOBIS/COBISCreditLineAPI-resolved-v1-0-1-min.json` },
      { name: "Credit Line Collaterals API", url: `${process.env.PUBLIC_URL}/LOANSCOBIS/COBISCreditLineCollateralsAPI-resolved-v1-0-1-min.json` },
      { name: "Credit Line Commissions API", url: `${process.env.PUBLIC_URL}/LOANSCOBIS/COBISCreditLineCommissionsAPI-resolved-v1-0-1-min.json` },
      { name: "Credit Line Distribution API", url: `${process.env.PUBLIC_URL}/LOANSCOBIS/COBISCreditLineDistributionAPI-resolved-v1-0-1-min.json` },
      { name: "Debtors Loans API", url: `${process.env.PUBLIC_URL}/LOANSCOBIS/COBISDebtorsLoansAPI-resolved-v1-0-2-min.json` },
      { name: "Disbursements Loans API", url: `${process.env.PUBLIC_URL}/LOANSCOBIS/COBISDisbursementsLoansAPI-resolved-v1-1-7-min.json` },
      { name: "Insurance API", url: `${process.env.PUBLIC_URL}/LOANSCOBIS/COBISInsuranceAPI-resolved-v1-0-1-min.json` },
      { name: "Loans Amortizations API", url: `${process.env.PUBLIC_URL}/LOANSCOBIS/COBISLoansAmortizationsAPI-resolved-v1-0-0-min.json` },
      { name: "Loans Balances API", url: `${process.env.PUBLIC_URL}/LOANSCOBIS/COBISLoansBalancesAPI-resolved-v1-0-0-min.json` },
      { name: "Loans Change Situation API", url: `${process.env.PUBLIC_URL}/LOANSCOBIS/COBISLoansChangeSituationAPI-resolved-v1-0-0-min.json` },
      { name: "Loans Operations API", url: `${process.env.PUBLIC_URL}/LOANSCOBIS/COBISLoansOperationsAPI-resolved-v1-0-6-min.json` },
      { name: "Loans Simulations API", url: `${process.env.PUBLIC_URL}/LOANSCOBIS/COBISLoansSimulationsAPI-resolved-v1-0-0-min.json` },
      { name: "Payments Loans API", url: `${process.env.PUBLIC_URL}/LOANSCOBIS/COBISPaymentsLoansAPI-resolved-v1-1-8-min.json` },
      { name: "Subsidy Loss API", url: `${process.env.PUBLIC_URL}/LOANSCOBIS/COBISSubsidyLossAPI-resolved-v1-0-1-min.json` },
      { name: "Transactional Loans API", url: `${process.env.PUBLIC_URL}/LOANSCOBIS/COBISTransactionalLoansAPI-resolved-v2-0-0-min.json` }
    ],
    Customers:[
      { name: "Additional Information Customers API", url: `${process.env.PUBLIC_URL}/CUSTOMERCOBIS/COBISAdditionalInformationCustomersAPI.json` },
      { name: "Businesses Customers API", url: `${process.env.PUBLIC_URL}/CUSTOMERCOBIS/COBISBusinessesCustomersAPI.json` },
      { name: "Contacts Customers API", url: `${process.env.PUBLIC_URL}/CUSTOMERCOBIS/COBISContactsCustomersAPI.json` },
      { name: "Customers API", url: `${process.env.PUBLIC_URL}/CUSTOMERCOBIS/COBISCustomersAPI.json` },
      { name: "Customers Balance API", url: `${process.env.PUBLIC_URL}/CUSTOMERCOBIS/COBISCustomersBalanceAPI.json` },
      { name: "Economic Groups Customers API", url: `${process.env.PUBLIC_URL}/CUSTOMERCOBIS/COBISEconomicGroupsCustomersAPI.json` },
      { name: "Foreign Accounts API", url: `${process.env.PUBLIC_URL}/CUSTOMERCOBIS/COBISForeignAccountsAPI.json` },
      { name: "Legal Persons Customers API", url: `${process.env.PUBLIC_URL}/CUSTOMERCOBIS/COBISLegalPersonsCustomersAPI.json` },
      { name: "Products Customers API", url: `${process.env.PUBLIC_URL}/CUSTOMERCOBIS/COBISProductsCustomersAPI.json` },
      { name: "References Customers API", url: `${process.env.PUBLIC_URL}/CUSTOMERCOBIS/COBISReferencesCustomersAPI.json` },
      { name: "Relationships Customers API", url: `${process.env.PUBLIC_URL}/CUSTOMERCOBIS/COBISRelationshipsCustomersAPI.json` },
      { name: "Solidarity Groups Customers API", url: `${process.env.PUBLIC_URL}/CUSTOMERCOBIS/COBISSolidarityGroupsCustomersAPI.json` }
    ],    
    Orders:[
      { name: "Orders API", url: `${process.env.PUBLIC_URL}/ORDERSCOBIS/COBIS Orders API-v1-oas30.json` },
      { name: "Businesses Customers API", url: `${process.env.PUBLIC_URL}/ORDERSCOBIS/COBIS Orders Template API-v1-oas30.json` }
    ],
    DemandDepositsAccounts:[
      { name: "Automatic Savings Plan Demand Deposits", url: `${process.env.PUBLIC_URL}/DEMANDDEPOSITS/COBISAutomaticSavingsPlanDemandDepositsAPI-resolved-v1-0-1.json` },
      { name: "Balances Demand Deposits API", url: `${process.env.PUBLIC_URL}/DEMANDDEPOSITS/COBISBalancesDemandDepositsAPI-resolved-v2-4-7.json` },
      { name: "Demand Deposits API", url: `${process.env.PUBLIC_URL}/DEMANDDEPOSITS/COBISDemandDepositsAPI-resolved-v2-5-10.json` },
      { name: "Checking Account API", url: `${process.env.PUBLIC_URL}/DEMANDDEPOSITS/COBISCheckingAccountAPI-resolved-v1-3-1.json` },
      { name: "Financial Transactional Demand Deposits API", url: `${process.env.PUBLIC_URL}/DEMANDDEPOSITS/COBISFinancialTransactionalDemandDepositsAPI-resolved-v2-4-3.json` },
      { name: "Freezing Demand Deposits API", url: `${process.env.PUBLIC_URL}/DEMANDDEPOSITS/COBISFreezingDemandDepositsAPI-resolved-v2-4-5.json` },
      { name: "Overdraft Checking Account API", url: `${process.env.PUBLIC_URL}/DEMANDDEPOSITS/COBISOverdraftCheckingAccountAPI-resolved-v1-5-6.json` },
      { name: "Transactional Demand Deposits API", url: `${process.env.PUBLIC_URL}/DEMANDDEPOSITS/COBISTransactionalDemandDepositsAPI-resolved-v2-6-8.json` }
    ],
    TimeDeposits:[
      { name: "TimeDepositsAPI", url: `${process.env.PUBLIC_URL}/TIMEDEPOSITS/COBISTimeDepositsAPI.json` },
      { name: "TimeDepositsBlocksAPI", url: `${process.env.PUBLIC_URL}/TIMEDEPOSITS/COBISTimeDepositsBlocksAPI.json` },
      { name: "TimeDepositsManagementAPI", url: `${process.env.PUBLIC_URL}/TIMEDEPOSITS/COBISTimeDepositsManagementAPI.json` }
    ],
    Admin:[
      { name: "AdminAPI", url: `${process.env.PUBLIC_URL}/ADMIN/COBISAdminAPI.json` }
    ],
    Authentication:[
      { name: "COBISSystemAuthorizationAPI", url: `${process.env.PUBLIC_URL}/AUTHENTICATION/COBISSystemAuthorizationAPI-resolved-v1-0-0.json` },
      { name: "COBISOfficialAuthentication", url: `${process.env.PUBLIC_URL}/AUTHENTICATION/COBISOfficialAuthenticationV2API-resolved-v2-0-1.json` }
    ],
    FinancialProductManager:[
      { name: "FinancialProductManager", url: `${process.env.PUBLIC_URL}/FINANCIALPRODUCTMANAGER/COBISFinancialProductManagerV2API-resolved-v2-0-0.json` }
    ]
  };

  const toggleCategory = (category: string) => {
    setOpenCategory(openCategory === category ? null : category);
  };

  const handleApiClick = (url: string) => {
    setSelectedApi(url);
    setActiveApi(url);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <h1 className="text-lg text-empresa-verde text-mono py-4 px-6 rounded-md shadow-xl font-serif font-extrabold border-b-2 border-empresa-verde text-center">
        APIs Externas COBIS
      </h1>
      <div className="flex flex-1">
        <nav className="w-1/4 p-4 bg-slate-950 text-white">
          {Object.keys(apis).map((category) => (
            <div key={category} className="mb-4">
              <button
                className="text-lg font-semibold text-empresa-verde hover:text-empresa-rojo transition-colors"
                onClick={() => toggleCategory(category)}
              >
                {category}
              </button>
              {openCategory === category && (
                <ul className="mt-2 ml-4">
                  {apis[category].map((api) => (
                    <li key={api.name} className="mb-2">
                      <button
                        className={`hover:text-empresa-verde transition-colors ${activeApi === api.url ? 'text-empresa-rojo' : ''}`}
                        onClick={() => handleApiClick(api.url)}
                      >
                        {api.name}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </nav>
        <div className="w-4/5 p-4">
          {selectedApi ? (
            
            <SwaggerUI url={selectedApi} />
          ) : (
            <p className="text-empresa-negro">Selecciona una API para ver la documentación...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ApisComponetsCOBIS;
