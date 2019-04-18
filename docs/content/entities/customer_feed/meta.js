module.exports = {"name":"CustomerFeed","object":{"matching_function":{"function_string":{"_type":"string","_description":"String representation of the Function.\n\nExamples:\n1) IDENTITY(true) or IDENTITY(false). All or none feed items serve.\n2) EQUALS(CONTEXT.DEVICE,\"Mobile\")\n3) IN(FEED_ITEM_ID,{1000001,1000002,1000003})\n4) CONTAINS_ANY(FeedAttribute[12345678,0],{\"Mars cruise\",\"Venus cruise\"})\n5) AND(IN(FEED_ITEM_ID,{10001,10002}),EQUALS(CONTEXT.DEVICE,\"Mobile\"))\nSee\n\nhttps:\n//developers.google.com/adwords/api/docs/guides/feed-matching-functions\n\nNote that because multiple strings may represent the same underlying\nfunction (whitespace and single versus double quotation marks, for\nexample), the value returned may not be identical to the string sent in a\nmutate request."},"left_operands":{"_type":"array","_description":"The operands on the left hand side of the equation. This is also the\noperand to be used for single operand expressions such as NOT."},"operator":{"_type":"enum","_enums":[{"s":"UNSPECIFIED","description":"Not specified."},{"s":"UNKNOWN","description":"Used for return value only. Represents value unknown in this version."},{"s":"IN","description":"The IN operator."},{"s":"IDENTITY","description":"The IDENTITY operator."},{"s":"EQUALS","description":"The EQUALS operator"},{"s":"AND","description":"Operator that takes two or more operands that are of type\nFunctionOperand and checks that all the operands evaluate to true.\nFor functions related to ad formats, all the operands must be in\nleft_operands."},{"s":"CONTAINS_ANY","description":"Operator that returns true if the elements in left_operands contain any\nof the elements in right_operands. Otherwise, return false. The\nright_operands must contain at least 1 and no more than 3\nConstantOperands."}],"_description":"Operator for a function."},"right_operands":{"_type":"array","_description":"The operands on the right hand side of the equation."}},"status":{"_type":"enum","_enums":[{"s":"UNSPECIFIED","description":"Not specified."},{"s":"UNKNOWN","description":"Used for return value only. Represents value unknown in this version."},{"s":"ENABLED","description":"Feed link is enabled."},{"s":"REMOVED","description":"Feed link has been removed."}],"_description":"Status of the customer feed.\nThis field is read-only."},"resource_name":{"_type":"string","_description":"The resource name of the customer feed.\nCustomer feed resource names have the form:\n\n`customers/{customer_id}/customerFeeds/{feed_id}`"},"placeholder_types":{"_type":"array","_description":"Indicates which placeholder types the feed may populate under the connected\ncustomer. Required."},"feed":{"_type":"string","_description":"The feed being linked to the customer."}},"methods":["get","list","create","update","delete"]}