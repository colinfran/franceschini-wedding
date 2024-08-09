type ResponseData = {
  src: string
  width: number,
  height: number,
}

type SuccessErrorResponse = { 
  success: boolean, 
  error: any
}

type CalculateProps = {
  months: number
  days: number
  hours: number
  minutes: number
  seconds: number
}

type Contribution = {
  still_needs: string;
  mark_fulfilled: boolean;
  fulfilled: boolean;
  show_as_fulfilled: boolean;
  group_gift: boolean;
  hide_contributions: boolean;
  goal_units: number;
  completed_units: number;
  num_contributors: number;
  percent_complete: number;
  has_contributions: boolean;
  reserved: boolean;
  show_as_reserved: boolean;
};

type Image = {
  thumb: string;
  small: string;
  medium: string;
  large: string;
  full: string;
  base: string | null;
};

type RegistryItem = {
  object_id: string;
  sku_object_id: string;
  product_id: string | null;
  name: string;
  type: string;
  price: number;
  images: Image[];
  requested_quantity: number;
  contributions: Contribution;
  personal_note: string | null;
  button_cta: string;
  most_wanted: boolean;
  actions: {
    add_to_cart: boolean;
    add_to_registry: boolean;
  };
  description: string | null;
  detail_items: string[];
  product_look_id: string | null;
  product_look_key: string | null;
  msrp: string | null;
  sku_attributes: string[];
  custom_shipping_message: string | null;
  ship_method: string | null;
  shippable: string | null;
  return_policy: string | null;
  delivery_surcharge: string | null;
  discontinued: string | null;
  stock_message: string | null;
  free_shipping: boolean;
  badge_uuid: string | null;
  shipping_zones: string[];
  store_name: string | null;
  product_url: string | null;
  cash_fund: boolean;
  third_party_cash_additional_information: string | null;
  third_party_cash_identifier: string | null;
  registry_import: boolean;
  scheduled_import: boolean;
  third_party_cash: boolean;
  item_id: string;
};

type DataResponse = {
  default_collection_object_id: string,
  default_collection: RegistryItem[]
}


export type { ResponseData, SuccessErrorResponse, CalculateProps, RegistryItem, DataResponse }
